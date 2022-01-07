## Description

An example of Nest.js

- [Nest](https://github.com/nestjs/nest)
- [gRPC](https://grpc.io/)

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start [app_name]

# watch mode
$ yarn start:dev [app_name]

# production mode
$ yarn start:prod [app_name]
```

> Default `app_name` is `api`

```bash
# Start app in terminal #1
$ yarn start
# Start gRPC server in terminal #2
$ yarn start grpc-server
```

Open http://localhost:3000 in your browser.

Try to type http://localhost:3000/MyName and http://localhost:3000/ne5.

## Test

```bash
# unit tests
$ yarn test [app_name]

# e2e tests
$ yarn test:e2e [app_name]

# test coverage
$ yarn test:cov [app_name]
```

## Generating gRPC Code

```bash
$ yarn gen:grpc
```
