# Sazim Backend Assessment

## Description

Welcome to the Sazim backend assessment starter code. This starter project [NestJS](https://github.com/nestjs/nest)-GraphQL, [Prisma](https://www.prisma.io/) with the power of [Typescript](https://www.typescriptlang.org/). The following steps should get anyone up and running with the project:

### 1. **Clone the repository**
```bash
git clone https://github.com/SazimAssessments/sazim-backend-nestjs-assessment-starter.git # <put_folder_name>
```
### 2. **Project setup** 

Make sure you have `yarn` installed and you are using at lease Node `version 20`.  If you have nvm installed, you can activate the correct Node version with the following command: 
```
nvm use
```

Next, install the dependencies.

```bash
yarn install
```

### 3. **Environment Variables**
 The `DATABASE_URL` variable for Prisma setup is taken from environment variable. So you will need the following files:
  - `.env` file for development
  - `env.test.local` for testing
You can refer to [`.env.example`](.env.example) file for example values. 
    
**NOTE**: The [`.env.example`](.env.example)  and [`schema.prisma`](prisma/schema.prisma) are configured for [Postgresql](https://www.postgresql.org/).  If you're using a different database, you'll need to update both files accordingly.

### 4. **Setup database**

Once `DATABASE_URL` setup is done in the .env, run the following commands:
```bash
yarn run db:generate:client # or, # npx prisma generate
yarn run db:push:dev # or, # prisma db push
yarn run db:push:test 
```

### 5. **Run Tests**

Running the following command should show `1 passed` *Test Suites* and `1 passed` *Tests* if things are setup properly

```bash
yarn run test:e2e
```


### 6. **Compile and run the project**

To start the project, use one of the following commands:

```bash
# development
yarn run start

# watch mode
yarn run start:dev
```

This will have GraphQl playground running at `http://localhost:<<PORT>>/graphql`. (For `PORT=3000` it should be running at http://localhost:3000/graphql)

- You can test endpoint with following health check query

```bash
# Query
query {
  status {
    status
    details {
      database {
        status
      }
    }
  }
}

# expected response after execution
{
  "data": {
    "status": {
      "status": "ok",
      "details": {
        "database": {
          "status": "up"
        }
      }
    }
  }
}
```


### 7. Other

- To use NestJS cli
```bash
# yarn
yarn add -g @nestjs/cli
```
