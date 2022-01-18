# 100 Days of Code Challenge & FreeCodeCamp Certification Challenge

> `Javascript` can be used not only to build a SPA. But it can also be used on the back end, or server, basically, to build entire web applications.

## Project that we will build!

> A People Finder microservice app with [MongoDB] , [Mongoose], [Nodejs], and [Expressjs].

_Let's Build this_

**FreeCodeCamp Backend Development and APIs Course**

It is divided into four main sections so you will find that there `4 folders`.

Each `folder` is dedicated to the specific sections in the course.

## 1. Managing Packages With NPM

```
What is NPM?

How to install and use open source packages available on NPM?

```

Every `package.json` file should have the following important details:

- `name` - What is the name of the project?

- `author` - who are the people who build this project?

- `description` - Ideally, every project should have a description. It is not only important but also makes it easy to maintain.

- `keywords` - It is an array of Important keywords that will make it easier to understand.

- `license` - License is to inform users of what they are allowed to do with your project.

Open Source Projects license include `MIT and BSD`

It also lets you state what the user can or can not do with the project.

- `version` - The version field is the required field of the `package.json` file. It describes the version of your project.

- Semantic Versioning: `MAJOR.MINOR.PATCH` -
  MAJOR version increments when you make incompatible API changes.

MINOR version increments when you add functionality in a backward-compatible manner.

And the PATCH version increments when you make bug fixes.

```
Note: Tilde `~` symbol helps to upgrade to the latest Patch version automatically.
```

```
Note: Caret `^` symbol helps to upgrade to the latest Patch as well as MINOR versions automatically.
```

- `dependencies` - Have you wondered - How can npm know exactly what your project needs?

Well! you tell npm by adding the dependencies section in the package.json file.

Note: We as a developer have the rights to either add a package or remove it if there' no need.

First Module Completed!

## 2. Basic Node and Express Server

How do you write a "Hello World" Program with Nodejs?

```node
console.log('Hello World');
```

And you can execute it by using `node server.js`

### Create Your First Server/API Using Node and Express

Check out the `[firstServer]('./boilerplate-express/firstServer.js')` file

We have just created a server that responds with 'Hello Express' but what if we want to send a file to the client.

We can use `res.sendFile(__dirname + relativePath);` to send a file.

**Note:** We always give an absolute path when we have to send a file from our server.

To send many static assets, use a middleware function `express.static(PATH, absolutePath)` and call it using app.use().

Serve _JSON_ on a Specific Route - The most preferred way of moving information around the web is _JSON_.

### JSON Object looks like your package.json file

```json
{ "key": "value" }
```

What is the environment variable?

- Environment variables are used to store private database URIs or API keys.

**Note** 3 rules to keep in mind when defining an environment variable.

1. It should be in all uppercase.

2. It need not be wrapped in quotes.

3. It should be separated by underscores and no space is allowed between the `key and value`

Install Environment variable dependency:
`npm install dotenv`

### Middleware Function -

Used to perform the side effects as well to do the required verification.

A middleware function takes 3 parameters ->
And finishes the cycle by either adding some data or sending a response.

- `req` - Express request object

- `res` - Express response object

- `next` - If the middleware function is executed successfully then please guide your server to move to the next code by calling `next()`

**NOTE:** The middleware function should be executed before every other route if you are trying to run it for every method/route.

Chainable middleware function -> Function that is executed in the route itself. And you can again either add or send the required response.

### Route Parameters Input & Communication

Route parameters help the server know what the client wants to see.

```npm
route_path: '/user/:username/order/:orderId
actual_request_URL: '/user/333/order/2802'
req.params: {username: '333', orderId: '2802'}
```

We can receive the data in parameters as well as in `queries`.

And access the received data using `req` object.

- req.params
- req.query

Check out many other useful methods and properties of [req object](https://expressjs.com/en/api.html#req)

| HTML Methods | CRUD Operations | Header | Body |
| ------------ | --------------- | ------ | ---- |
| GET          | READ            | Yes    | No   |
| POST         | CREATE          | Yes    | Yes  |
| PUT          | UPDATE          | Yes    | Yes  |
| DELETE       | DELETE          | Yes    | No   |

Use `body-parser` to parse the Data received on the server. We can use the express built-in body-parser

```js
// Initialize a Middleware Parser
app.use(express.json({ extended: false }));
```

Second Module Completed!

## 3. Backend Development and APIs

How to install and set up MongoDB and Mongoose?

Use the below command to install MongoDB and Mongoose ODM

### Install MongoDB

`npm install mongodb`

### Install Mongoose ODM

`npm install mongoose`

### CRUD OPERATIONS USING MongoDB

1. C in CRUD: CREATE

We need a Schema that maps to a MongoDB collection.

Schema is nothing but a type of `Table` AND Collection is just One big EXCEL Sheet that can contain many schemas/tables.

And basically, it is referred to as Collections.

When you define what type of data you want to store in the database. Then you create a Model for it.

Model allows you to create instances/examples of your objects.

### Create and Save a Record

How do you create a record in your database?

Steps:

- Require the mongoose module and setup a Schema.

- Create a Model for any particular Document

- Connect your server to the Database using `mongoose.connect()`

- Pass the users data as an object to the Model which you just created in the last step.

- call `Model.save()` and then check your database. You should be able to find the users data.

Check out the `/boilerplate-mongomongoose/exercises/createRecord.js` file for the code reference.

## 4. Claim Your Certifications!

Best,

> Nitesh
