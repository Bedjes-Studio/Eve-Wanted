## Description

Backend API for EVE Wanted.

This microservice has been developped by [Hugo Langlais](https://www.linkedin.com/in/hugo-langlais)

# Main dependencies

-   NestJS v11
-   NodeJS v22 (LTS)
-   Azure Functions v4
-   Mongoose v8

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development (nest)
$ npm run start

# watch mode (nest)
$ npm run start:dev

# azure function mode
$ npm run start:azure
```

## Linter and code format

```bash
# run linter check (eslint)
$ npm run lint

# fix with linter (eslint)
$ npm run lint:fix

# format code
$ npm run format
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## folder architecture

```
bciti-backend-parking
├── dist/                                   # NestJS compilation files
├── main/                                   # Azure Function App entry point
├── node_modules/                           # NodeJS modules dependencies
├── src/                                    # Microservice application
│    ├── [module name]/
│    │    ├── dtos/                         # Data Transfer Objects
│    │    ├── entities/                     # Business Logic Class
│    │    ├── enums/                        # Enums
│    │    ├── interfaces/                   # Interfaces
│    │    ├── schemas/                      # Mongoose schemas
│    │    ├── utils/                        # Utils functions
│    │    ├── [module name].api.service.ts  # Module API for public use
│    │    ├── [module name].controller.ts   # Module routing
│    │    ├── [module name].module.ts       # Module export file
│    │    ├── [module name].service.ts      # Module code logic
│    │    └── [module name].[type].spec.ts  # Unit tests
│    │    └── [module name].export.ts       # Module export file for public npm module
│    ├── common/                            # Common logic (middlewares, pipes, filters...)
│    ├── app.api.service.ts                 # Application API for public use
│    ├── app.module.ts                      # Application module
│    ├── export.package.ts                  # Global export file for public npm module
│    ├── main.azure.ts                      # Entry point for Azure Functions
│    └── main.ts                            # Entry point for Nest
├── test/
│    ├── build/                             # Build and global package tests
│    └── e2e/                               # End to end tests
├── .funcignore                             # Azure Functions ignore
├── .gitignore                              # GitHub ignore
├── .npmrc                                  # Credentials for private npm packages
├── .prettierrc                             # Prettier config file
├── eslint.config.mjs                       # Eslint config file
├── host.json                               # Azure Functions host config
├── local.settings.json                     # Azure Functions local config
├── nest-cli.json                           # NestJS CLI config
├── package-lock.json                       # NodeJS package-lock file
├── package-postbuild.json                  # Script for npm module postbuild operations
├── package.json                            # NodeJS package file
├── README.md                               # Good to see that you read this file :D
├── tsconfig.build.json                     # TypeScript build configuration
├── tsconfig.build.package.json             # TypeScript build configuration for the public package
└── tsconfig.json                           # TypeScript configuration
```

## Publish new package version

Add everything you want to export in the src/export.package.ts. Then you can deploy in one shot or doing it step by step. In case of emergency you can unpublish version on GitHub.

### Single line publishing

Use publish scripts

```
npm run package:publish:major
npm run package:publish:minor
npm run package:publish:patch
```

### Step by step publishing

1. Update package version

```
npm version major
npm version minor
npm version patch
```

2. Compile public package

```
npm run package:build
```

3. Publish new version

```
npm run package:publish
```

4. Check version publishing

```
npm show @bciti/bciti-backend-parking versions
```

## Install or update the package in other microservices

-   Install the package `npm install @bciti/bciti-backend-parking`
-   Update the package`npm install @bciti/bciti-backend-parking@latest`
