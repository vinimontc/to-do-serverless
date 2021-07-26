# Serverless - Todo's

Application for create and get todo's of users.

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS, Serverless.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `serverless dynamodb install` to install dynamodb locally
- Run `npm run dynamo:start` to start dynamodb and create table
- In another terminal run `npm run dev` to start application

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `serverless dynamodb install` to install dynamodb locally
- Run `yarn dynamo:start` to start dynamodb and create table
- In another terminal run `yarn dev` to start application

## Test application

### Locally

- Create a Todo for a user (id = user_id):

    Path: http://localhost:3000/dev/todos/{id}

    Method: POST

- Get Todo's by an user id (id = user_id):

    Path: http://localhost:3000/dev/todos/{id}

    Method: GET

