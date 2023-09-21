This is the backend server for the SAMM android app.

# Prerequisite

Required : 
- [NodeJs](https://nodejs.org/)
- [MongoDB Community](https://www.mongodb.com/try/download/community)
- [MongoDB Shell](https://www.mongodb.com/try/download/shell)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

Optional :
- [Postman](https://www.postman.com/)


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

There are 2 environments : DEV and PROD. Only DEV environment have a default configuration.
You can custom your own environment by creating a .env file at the root of the repository.

Settings are :
- `[ENVIRONMENT]_SERVER_PORT` : Port for the server (default : `8080`)
- `[ENVIRONMENT]_MONGODB_HOST` : Host for the mongodb instance (default `'mongodb://127.0.0.1'`)
- `DEV_MONGODB_PORT` : Port for the mongodb instance (default `27017`)
- `DEV_MONGODB_NAME` : Database name for mongodb (default `dev`)

# References

[OpenClassrooms - NodeJS and MongoDB](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb)
[Ákos Szokodi - Node config best practices](https://codingsans.com/blog/node-config-best-practices)