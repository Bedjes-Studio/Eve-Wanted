require("dotenv").config();

let env = process.env.NODE_ENV.trim();

const dev = {
    server: {
        port: parseInt(process.env.DEV_SERVER_PORT) || 8080,
        key: process.env.DEV_SERVER_KEY,
        cookieDuration: process.env.DEV_SERVER_COOKIE_DURATION || "24h",
    },
    application: {
        id: process.env.DEV_APPLICATION_ID,
        key: process.env.DEV_APPLICATION_KEY,
    },
    mongodb: {
        host: process.env.DEV_MONGODB_HOST || "mongodb://127.0.0.1",
        port: parseInt(process.env.DEV_MONGODB_PORT) || 27017,
        name: process.env.DEV_MONGODB_NAME || "dev",
    },
};

const prod = {
    server: {
        port: parseInt(process.env.PROD_SERVER_PORT),
        key: process.env.PROD_SERVER_KEY,
    },
    application: {
        id: process.env.PROD_APPLICATION_ID,
        key: process.env.PROD_APPLICATION_KEY,
    },
    mongodb: {
        host: process.env.PROD_MONGODB_HOST,
        port: parseInt(process.env.PROD_MONGODB_PORT),
        name: process.env.PROD_MONGODB_NAME,
    },
};

const config = {
    dev,
    prod,
};

console.log(config[env]);

module.exports = config[env];
