# Welcome to Delta Project Api 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D18.12.1-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/goleass/delta_project_api#readme)


### ✨ [Demo](https://delta-project-api.vercel.app)

# Getting started

### Clone the repository

run `git clone https://github.com/goleass/delta_project_api.git`

### Install the dependancies

> [NodeJS](https://nodejs.dev/) is required

```
cd delta_project_api
npm install
```

create a _.env_ file at the root of the project
populate it with the url of your database

```
DATABASE_URL="postgresql://<username>:<password>@<host_name>:<port>/<database_name>?schema=public"
```
### Run the project locally

run `npm run dev`

## Advanced usage

### Prisma

### Format the Prisma schema

```bash
npx prisma format
```

### Migrate the SQL schema

```bash
npx prisma migrate dev
```

### Update the Prisma Client

```bash
npx prisma generate
```

### Launch Prisma Studio

```bash
npx prisma studio
```

## Run tests

```sh
npm run test
```

## Using the REST API

You can access the REST API of the server using the following endpoints:

### `GET`

- `/student?id={id}`: Fetch a single student by its `id`
- `/students`: Fetch all students
### `POST`

- `/student`: Create a new student
  - Body:
    - `name: String` (required): The name of the student
    - `address: String` (optional): The address of the student
    - `phoneNumber: String` (optional): The phone number of the student
    - `avatarUrl: String` (optional): The avatar url of the student

### `PUT`

- `/student?id={id}`: Update infos of the student by its `id`
    - Body:
      - `name: String` (required): The name of the student
      - `address: String` (optional): The address of the student
      - `phoneNumber: String` (optional): The phone number of the student
      - `avatarUrl: String` (optional): The avatar url of the student

### `DELETE`

- `/student/:id`: Delete a student by its `id`

## Author

👤 **Leonardo Assunção <leonardoassuncao12235@gmail.com>**

* Github: [@goleass](https://github.com/goleass)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2022 [Leonardo Assunção <leonardoassuncao12235@gmail.com>](https://github.com/goleass).

This project is [MIT](https://github.com/goleass/delta_project_api/blob/master/LICENSE) licensed.
