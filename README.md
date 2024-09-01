# Sazim Backend Assessment

## Description

Welcome to Sazim. Here is a stater code for backend assessment with [NestJS](https://github.com/nestjs/nest)-GraphQL, [Prisma](https://www.prisma.io/) with the power of [Typescript](https://www.typescriptlang.org/).

### 1. **Clone the repository**
```bash
git clone https://github.com/SazimAssessments/sazim-backend-nestjs-assessment-starter.git # <put_folder_name>
```
### 2. **Project setup** 

Make sure you have `yarn` installed. And you might want to ensure at lease Node `version 20` is active. You can ensure that if you have `nvm` via following command. 
```
nvm use
```

Then install the dependencies.

```bash
yarn install
```

### 3. **Environment Variables**
 The `DATABASE_URL` variable for Prisma setup is taken from environment variable. So you will need 
    - `.env`/`.env.local`/`.env.development.local` file for development
    - `env.test.local` for testing

    [`.env.example`](.env.example) file is has the example values as a guideline. 
    
**NOTE**: The [`.env.example`](.env.example)  and [`schema.prisma`](prisma/schema.prisma) has [Postgresql](https://www.postgresql.org/) setup. For other database, both files will require appropriate update.

### 4. **Setup database**

Once `DATABASE_URL` is setup in the .env, run the following commands:
```bash
yarn run db:generate:client # or => npx prisma generate
yarn run db:push:dev # or => prisma db push
yarn run db:push:test 
```

### 5. **Run Tests**

Running the following command should show `1 passed` Test Suites and `3 passed` Tests

```bash
yarn run test:e2e
```


### 6. **Compile and run the project**

```bash
# development
yarn run start

# watch mode
yarn run start:dev
```

This should have GraphQl playground running at `http://localhost:<<PORT>>/graphql`. (For `PORT=3000` it should be running at [link](http://localhost:3000/graphql))

- You can test with 

```bash
# query
{status}

# response after execution
{
  "data": {
    "status": "Welcome from SAZIM"
  }
}
```
- And running the mutation
```bash
mutation CreateStatus($createStatusDto: CreateStatusDto!) {
  createStatus(createStatusDto: $createStatusDto) {
    id
    message
  }
}
# variable
{ 
    "createStatusDto" : { 
        "message": "Hello world" 
    }
}

# response after execution
{
  "data": {
    "createStatus": {
      "id": 3,
      "message": "Hello world"
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
