# Nginx configuration for `admin.carpool.ligerbots.org`

**NOTE**: This assumes the host operating system is alpine/3.19.9 or greater.

Use this vhost to place Nginx in front of the Directus container exposed on port `8055`.

## Certbot workflow

Because the final TLS configuration references files under `/etc/letsencrypt/`, bring the site up in two phases:

1. start with an HTTP-only server block so Certbot can validate the domain
2. request the certificate
3. replace the temporary config with the full HTTPS configuration below

### Temporary bootstrap configuration

Use this first:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name admin.carpool.ligerbots.org;

    location / {
        proxy_pass http://127.0.0.1:8055;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

After saving the bootstrap config to /etc/nginx/http.d/admin.carpool.ligerbots.org.conf, test and reload Nginx:

```bash
sudo nginx -t
sudo rc-service nginx reload
```

## Recommended site configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name admin.carpool.ligerbots.org;

    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name admin.carpool.ligerbots.org;

    ssl_certificate /etc/letsencrypt/live/admin.carpool.ligerbots.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/admin.carpool.ligerbots.org/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    client_max_body_size 64m;

    location / {
        proxy_pass http://127.0.0.1:8055;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }
}
```

## Certbot commands

If Certbot and its Nginx plugin are not installed yet:

```bash
sudo apk update
sudo apk add certbot certbot-nginx
```

Request the certificate for the admin hostname:

```bash
sudo certbot --nginx -d admin.carpool.ligerbots.org
```

If you prefer to keep the Nginx file fully manual, use the webroot flow instead:

```bash
sudo certbot certonly --webroot -w /var/www/html -d admin.carpool.ligerbots.org
```

Once the certificate has been issued:

1. replace the bootstrap config with the full HTTPS config in this document
2. test the config
3. reload Nginx

```bash
sudo nginx -t
sudo rc-service nginx reload
```

## Renewal

Test automatic renewal:

```bash
sudo certbot renew --dry-run
```

On Alpine, automatic renewal is typically scheduled with cron rather than a systemd timer. For example, add a root crontab entry:

```bash
sudo crontab -e
```

Example cron entry:

```cron
0 3 * * * certbot renew --quiet && rc-service nginx reload
```

## Notes

- This assumes the Directus container from [docker-compose.yml](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/docker-compose.yml) is published on the host as `127.0.0.1:8055` or otherwise reachable there.
- The WebSocket-related headers are included because Directus can use live connections.
- `client_max_body_size 64m;` can be raised if admins need to upload larger assets.
- DNS for `admin.carpool.ligerbots.org` must already point at this server before running Certbot.

## Recommended Directus setting changes

To keep generated URLs and redirects correct behind TLS, update [docker-compose.yml](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/docker-compose.yml):

- change `PUBLIC_URL` to `https://admin.carpool.ligerbots.org`
- consider tightening `CORS_ORIGIN` from `true` to the specific allowed origin(s)

Example:

```yaml
PUBLIC_URL: 'https://admin.carpool.ligerbots.org'
CORS_ENABLED: true
CORS_ORIGIN: 'https://admin.carpool.ligerbots.org'
```