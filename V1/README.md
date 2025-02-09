# EVE-Wanted

Platform to put a bounty on your greatest enemy!

# Prerequisite

Required :

-   [NodeJs](https://nodejs.org/)
-   [MongoDB Community](https://www.mongodb.com/try/download/community)
-   [MongoDB Shell](https://www.mongodb.com/try/download/shell)
-   [MongoDB Compass](https://www.mongodb.com/try/download/compass)

Optional :

-   [Postman](https://www.postman.com/)

# Installation

Install dependencies

```bash
npm install
```

Run server (development)

```
npm run nodemon-dev
```

Run server (production)

```
npm run nodemon-prod
```

# Configuration

There are 2 environments: DEV and PROD. Only DEV environments have a default configuration. You can customise your own environment by creating a .env file at the root of the repository.

Settings are :

-   `[ENVIRONMENT]_SERVER_PORT` : Port for the server (default : `8080`)
-   `[ENVIRONMENT]_SERVER_KEY` : Key for JSON Web Tokens (no default)
-   `[ENVIRONMENT]_SERVER_COOKIE_DURATION` : Lifespan of cookies (default `24h`)
-   `[ENVIRONMENT]_APPLICATION_ID` : Application ID in EVE ie Client ID (no default)
-   `[ENVIRONMENT]_APPLICATION_KEY` : Application secret key in EVE (no default)
-   `[ENVIRONMENT]_MONGODB_HOST` : Host for the mongodb instance (default `'mongodb://127.0.0.1'`)
-   `[ENVIRONMENT]_MONGODB_PORT` : Port for the mongodb instance (default `27017`)
-   `[ENVIRONMENT]_MONGODB_NAME` : Database name for mongodb (default `dev`)


# Credits

https://pixabay.com/fr/photos/univers-terre-plan%C3%A8te-espace-1784292/
