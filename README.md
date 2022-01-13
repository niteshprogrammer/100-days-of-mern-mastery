# 100 Days of Code Challenge & FreeCodeCamp Certification Challenge

> `Javascript` can be used not only to build an SPA. But it can also be used on the back end, or server, basically, to build entire web applications.

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

Every `package.json` file should have following important details:

- `name` - What is the name of the project?

- `author` - who are the people who build this project?

- `description` - Ideally, every project should have a description. It is not only important but also makes it easy to maintain.

- `keywords` - It is an array of the Important keywords that will make it more easy to understand.

- `license` - License is to inform users of what they are allowed to do with your project.

Open Source Projects license include `MIT and BSD`

It also lets you state what the user can or can not do with the project.

- `version` - The version field is the required field of the `package.json` file. It describes the version of your project.

- Semantic Versioning: `MAJOR.MINOR.PATCH` -
  MAJOR version increments when you make incompatible API changes.

MINOR version increments when you add functionality in a backwards-compatible manner.

And the PATCH version increments when you make bug fixes.

```
Note: Tilde `~` symbol helps to upgrade to the latest Patch version automatically.
```

```
Note: Caret `^` symbol helps to upgrade to the latest Patch as well as MINOR versions automatically.
```

- `dependencies` - Have you wondered - How can npm know exactly what your project needs?

Well! you tell npm by adding the dependencies section in the package.json file.

Note: We as a developer have rights to either add a package or remove it if there' no need.

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

**Note:** We always give absolute path when we have to send a file from our server.

To send many static assets, use a middleware function `express.static(PATH, absolutePath)` and call it using app.use().

Serve _JSON_ on a Specific Route - The most preferred way of moving information around the web is _JSON_.

### JSON Object looks as your package.json file

```json
{ "key": "value" }
```

## 3. Backend Development and APIs

## 4. Claim Your Certifications!

Best,

> Nitesh
