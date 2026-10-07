# LigerBots Carpool Backend

This repository contains the content-management backend for the LigerBots carpool site. The backend is built around [Directus](https://directus.io/) running on PostgreSQL/PostGIS and Redis, along with a couple of custom Directus extensions. The public-facing frontend is no longer part of this repository having been relocated to raisch/ligerbots-carpool-app.

## Repository layout

- [docker-compose.yml](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/docker-compose.yml) – local Directus, PostgreSQL/PostGIS, and Redis services
- [package.json](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/package.json) – root helper scripts for starting services, backups, extension packaging, and Nginx management on Alpine
- [extensions/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/extensions) – custom Directus extensions
- [templates/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/templates) – Directus template assets
- [directus/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/directus) – saved Directus schema snapshots

## Prerequisites

- Node.js 21+ and npm
- Docker Desktop or another Docker runtime with Compose support

## Local development

### 1. Install dependencies

Install the root package dependencies:

```bash
npm install
```

### 2. Start the backend services

From the repository root:

```bash
npm run service:start
```

This starts:

- PostgreSQL/PostGIS
- Redis
- Directus on `http://localhost:8055`

Stop the stack with:

```bash
npm run service:stop
```

Restart it with:

```bash
npm run service:restart
```

## Important implementation notes

- Service credentials and other container configuration are defined in [docker-compose.yml](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/docker-compose.yml). Treat the checked-in defaults as development-only values and replace them before any real deployment.

## Useful commands

### Root scripts

From the repository root:

```bash
npm run service:start
npm run service:stop
npm run service:restart
npm run extensions:install
npm run directus:schema:backup
npm run db:backup
npm run db:restore
npm run nginx:start
npm run nginx:stop
npm run nginx:reload
```

The `nginx:*` scripts are intended for Alpine hosts that use OpenRC and have Nginx installed on the host system.

## Directus extensions

The repository includes two custom extensions:

- [extensions/directus-extension-photos](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/extensions/directus-extension-photos) – custom endpoint extension
- [extensions/directus-extension-module-landing-page](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/extensions/directus-extension-module-landing-page) – custom Directus module

## Backups and schema snapshots

- Database data is stored in [database/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/database) when running locally via Docker Compose.
- Directus schema snapshots live in [directus/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/directus).
- Root scripts are available for dumping and restoring the database, and for exporting the Directus schema.
