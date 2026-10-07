# LigerBots Carpool Backend

This repository contains the content-management backend for the LigerBots carpool site. The backend is built around [Directus](https://directus.io/) running on PostgreSQL/PostGIS and Redis, with a separate SvelteKit frontend and a couple of custom Directus extensions.

## Repository layout

- [docker-compose.yml](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/docker-compose.yml) – local Directus, PostgreSQL/PostGIS, and Redis services
- [package.json](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/package.json) – root helper scripts for starting services, backups, and extension packaging
- [frontend/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend) – SvelteKit frontend for rendering site content from Directus
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

Install the frontend dependencies:

```bash
cd frontend
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

### 3. Run the frontend

From [frontend/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend):

```bash
PUBLIC_SERVER_HOST=localhost PUBLIC_SERVER_PORT=5173 npm run dev
```

Then open `http://localhost:5173`.

## Important implementation notes

- The SvelteKit frontend currently contains a hardcoded Directus API base URL in:
  - [frontend/src/lib/directus.js](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend/src/lib/directus.js)
  - [frontend/src/lib/file.js](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend/src/lib/file.js)
  - [frontend/vite.config.ts](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend/vite.config.ts)
- Because of that, local frontend development may still target the deployed Directus instance unless those values are updated for local use.
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
```

### Frontend scripts

From [frontend/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend):

```bash
npm run dev
npm run build
npm run preview
npm run check
```

## Directus extensions

The repository includes two custom extensions:

- [extensions/directus-extension-photos](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/extensions/directus-extension-photos) – custom endpoint extension
- [extensions/directus-extension-module-landing-page](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/extensions/directus-extension-module-landing-page) – custom Directus module

## Backups and schema snapshots

- Database data is stored in [database/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/database) when running locally via Docker Compose.
- Directus schema snapshots live in [directus/](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/directus).
- Root scripts are available for dumping and restoring the database, and for exporting the Directus schema.

## Current status

The frontend itself marks this project as a work in progress in [frontend/src/routes/+page.svelte](/Users/robr/Documents/projects/ligerbots/ligerbots-carpool-backend/frontend/src/routes/+page.svelte). Expect active development and some rough edges during local setup.
