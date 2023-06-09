# Back End Development and APIs

Reference: [FreeCodeCamp: Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis)

- [Back End Development and APIs](#back-end-development-and-apis)
  - [Managing Packages with NPM](#managing-packages-with-npm)
    - [1. The `package.json` file](#1-the-packagejson-file)
    - [2. Some of the fields in the `package.json` file](#2-some-of-the-fields-in-the-packagejson-file)
    - [3. The `dependencies` field](#3-the-dependencies-field)
    - [4. Use special characters to control the Version a Dependency](#4-use-special-characters-to-control-the-version-a-dependency)
  - [Basic Node and Express](#basic-node-and-express)
    - [1. Start a Working Express Server](#1-start-a-working-express-server)
    - [2. Serve an HTML File](#2-serve-an-html-file)
    - [3. Serve Static Assets](#3-serve-static-assets)
    - [4. Serve JSON on a Specific Route](#4-serve-json-on-a-specific-route)
    - [5. The `.env` File](#5-the-env-file)
    - [6. Implement a Root-Level Request Logger Middleware](#6-implement-a-root-level-request-logger-middleware)
    - [7. Chain Middleware to Create a Time Server](#7-chain-middleware-to-create-a-time-server)
    - [8. Get Route Parameter Input from the Client](#8-get-route-parameter-input-from-the-client)
    - [9. Get Query Parameter Input from the Client](#9-get-query-parameter-input-from-the-client)
    - [10. Use body-parser to Parse POST Requests](#10-use-body-parser-to-parse-post-requests)
    - [11. Get Data from POST Requests](#11-get-data-from-post-requests)
  - [MongoDB and Mongoose](#mongodb-and-mongoose)
    - [1. Install and Set Up Mongoose](#1-install-and-set-up-mongoose)
    - [2. Create a module - Schema](#2-create-a-module---schema)
    - [3. Create and Save a Record of a Model](#3-create-and-save-a-record-of-a-model)
    - [4. Create Many Records with model.create()](#4-create-many-records-with-modelcreate)
    - [5. Use model.find() to Search Your Database](#5-use-modelfind-to-search-your-database)
    - [6. Use model.findOne() to Return a Single Matching Document from Your Database](#6-use-modelfindone-to-return-a-single-matching-document-from-your-database)
    - [7. Use model.findById() to Search Your Database By \_id](#7-use-modelfindbyid-to-search-your-database-by-_id)
    - [8. Perform Classic Updates by Running Find, Edit, then Save](#8-perform-classic-updates-by-running-find-edit-then-save)
    - [9. Perform New Updates on a Document Using model.findOneAndUpdate()](#9-perform-new-updates-on-a-document-using-modelfindoneandupdate)
    - [10. Delete One Document Using model.findByIdAndRemove](#10-delete-one-document-using-modelfindbyidandremove)
    - [11. Delete Many Documents with model.remove()](#11-delete-many-documents-with-modelremove)
    - [12. Chain Search Query Helpers to Narrow Search Results](#12-chain-search-query-helpers-to-narrow-search-results)
  - [Back End Development and APIs Projects ^soon^](#back-end-development-and-apis-projects-soon)
    - [Project 1: Timestamp Microservice](#project-1-timestamp-microservice)
      - [Install and Setup](#install-and-setup)
      - [Requirement and Test](#requirement-and-test)
      - [Solution](#solution)
    - [Project 2: Request Header Parser Microservice](#project-2-request-header-parser-microservice)
    - [Project 3: URL Shortener Microservice](#project-3-url-shortener-microservice)
    - [Project 4: Exercise Tracker](#project-4-exercise-tracker)
    - [Project 5: File Metadata Microservice](#project-5-file-metadata-microservice)

---

## Managing Packages with NPM

> **npm** (Node Package Manager), is a command line tool to install, create, and share packages of JavaScript code written for Node.js.

- Install and Setup course:
  - In my course, I choose a clone repository from GitHub.
    - This is the GitHub repo [boilerplate-npm](https://github.com/freeCodeCamp/boilerplate-npm/).
    - `git clone https://github.com/freeCodeCamp/boilerplate-npm.git`.
- **Solution of Course**:
  - [File `package.json`](boilerplate-npm/package.json)
  - [Full Source `boilerplate-npm.rar`](boilerplate-npm/boilerplate-npm.rar)

### 1. The `package.json` file

- It is the center of any Node.js project or npm package. It stores information about your project, similar to how the head section of an HTML document describes the content of a webpage.
- It consists of a single JSON object where information is stored in **key-value** pairs.
- There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.
- If you look at the file tree of your project, you will find the package.json file on the top level of the tree.
- **Note**: Remember that you’re writing JSON, so all field names must use double quotes (`""`) and be separated with a comma (`,`).

### 2. Some of the fields in the `package.json` file

`author`
: It specifies who created the project, and can consist of a string or an object with contact or other details.

`description`
: Where a short, but informative description of your project belongs.

`license`
: Where you inform users of what they are allowed to do with your project.

- Note: Some common licenses for open-source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do.

`keywords`
: Where you can describe your project using related keywords.

`version`
: One of the **required** fields of your `package.json` file.
: This field describes the current version of your project.

 ▶️ **Challenge**: the `package.json` file:

- Add *your name* as the author of the project.
- Add a description of your project.
- Add an array of suitable strings to the keywords field in your project. One of the keywords should be `freecodecamp`.
- Fill in the license field in your project as you find suitable.
- Add a version to your project.

  ``` json
  {
    "author": "Khang Nguyen",
    "description": "Khang Nguyen",
    "keywords": [ "freecodecamp", "frontend", "backend"],
    "license": "MIT",
    "version": "1.0"
  }
  ```

### 3. The `dependencies` field

1. Expand Your Project with External Packages from npm
   - One of the biggest reasons to use a package manager is their powerful dependency management. **npm** automatically installs everything when you set up a project on a new computer.
   - **npm** can know exactly what your project needs based on the `dependencies` section of your `package.json` file.
   - In this section, the packages your project requires are stored using the following format:

     ``` json
      "dependencies":{
          "package-name": "version"
      }
      ```

   ▶️ **Challenge**: Add `version 1.1.0` of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "1.1.0"
      }
     }
     ```

2. Manage npm Dependencies By Understanding Semantic Versioning
   - Versions of the npm packages in the dependencies section of your package.json file follow what’s called **Semantic Versioning** (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer to clearly communicate what kind of changes projects can expect if they update.
   - This is how Semantic Versioning works according to the official website: `"package": "MAJOR.MINOR.PATCH"`
     | Name    | Description                                                                          |
     | ------- | ------------------------------------------------------------------------------------ |
     | `MAJOR` | version should increment when you make incompatible API changes.                     |
     | `MINOR` | version should increment when you add functionality in a backward-compatible manner. |
     | `PATCH` | version should increment when you make backward-compatible bug fixes.                |
   - This means that `PATCHes` are bug fixes and `MINORs` add new features but neither of them breaks what worked before. Finally, `MAJORs` add changes that won’t work with earlier versions.
   ▶️ **Challenge**: In the `dependencies` section of your `package.json` file, change the version of `@freecodecamp/example` to match MAJOR version 1, MINOR version 2 and PATCH version 13.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "1.2.13"
      }
     }
     ```

### 4. Use special characters to control the Version a Dependency

1. The Tilde-Character (`~`) to Always Use the Latest Patch Version:
   > To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (~) character.
   - Here's an example of how to allow updates to any **1.3.x** version. `package": "~1.3.8`

   ▶️ **Challenge**: In the `package.json` file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (1.2.13). But now, you want to allow the latest `1.2.x` version.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "~1.2.13"
      }
     }
     ```

2. The Caret-Character (`^`) to Use the Latest Minor Version:
   > To allow an npm dependency to update both MINOR updates and PATCHes version, you can use the caret ("**^**").
   - Example: Your current version of `@freecodecamp/example` should be `~1.2.13` which allows npm to install to the latest `1.2.x` version. If you were to use the caret (`^`) as a version prefix instead, npm would be allowed to update to any **1.** **x.x** version `package": "^1.3.8`

   ▶️ **Challenge**: Use the caret (`^`) to prefix the version of `@freecodecamp/example` in your dependencies and allow npm to update it to any new MINOR release.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "^1.2.13"
      }
     }
     ```

3. Remove a Package from Your Dependencies
   > If you want to remove an external package that you no longer need, you only need to remove the corresponding key-value pair for that package from your dependencies.

   ▶️ **Challenge**: Remove the @freecodecamp/example package from your dependencies.

     ``` json
     {
      "dependencies": {}
     }
     ```

**<div style="text-align: end; font-size: 15px;">[⬆ back to Top](#back-end-development-and-apis)</div>**

---

## Basic Node and Express

> - **Node.js** is a JavaScript runtime that allows developers to write backend (server-side) programs in JavaScript. Node.js comes with a handful of built-in modules — small, independent programs — that help with this. Some of the core modules include HTTP, which acts like a server, and File System, a module to read and modify files.
> - **Express** is a lightweight web application framework, and is one of the most popular packages on npm. Express makes it much easier to create a server and handle routing for your application, which handles things like directing people to the correct page when they visit a certain endpoint like /blog.

- **Solution of Course**
  - [File `myApp.js`](boilerplate-express/myApp.js)
  - [Full Source `boilerplate-express.rar`](boilerplate-express/boilerplate-express.rar)

- Meet the Node console

Node is just a JavaScript environment. Like client-side JavaScript, you can use the console to display useful debug information.

``` js
// myApp.js
let express = require("express");
let app = express();

console.log("Hello World");

module.exports = app;
```

### 1. Start a Working Express Server

- One fundamental method is `app.<listen>(<port>)`. It tells your server to `<listen>` on a given port, putting it in a running state.
- In Express, routes take the following structure: `app.METHOD(PATH, HANDLER)`:
  - `METHOD` is an HTTP method in lowercase.
  - `PATH` is a relative path on the server (it can be a string or even a regular expression).
  - `HANDLER` is a function that Express calls when the route is matched.
  - Handlers take the form `function(req, res) {...}`, where `req` is the request object, and `res` is the response object.
  - The example above will serve the string "Response String".

    ``` js
    function(req, res) {
      res.send('Response String');
    }
    ```

- :arrow_forward: **Challenge**: Use the `app.get()` method to serve the string `"Hello Express"` to GET requests matching the / (root) path.

  ``` js
  // myApp.js
  app.get("/", function (req, res) {
    res.send("Hello Express");
  });
  ```

### 2. Serve an HTML File

- To respond to a request with a file, use the `res.sendFile(<path>)` method.
  - **Note**: `<path`> must be an absolute file path. You can use the Node global variable `__dirname` to calculate the path like this: `<absolutePath> = __dirname + '/<relativePath>/<file.*>'`
- The `res.sendFile()` will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file.

- :arrow_forward: **Challenge**: Send the `/views/index.html` file as a response to GET requests to the `/` path. If send succeed, you can view your live app and should see a UI with no style applied.

  ``` js
  let express = require("express");
  let app = express();

  app.get("/", function (req, res) {
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
  });
  module.exports = app;
  ```

### 3. Serve Static Assets

- An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images).
- In Express, you can put in place this functionality using the middleware `express.static(<path>)`:
  - `<path>` is the absolute path of the folder containing the assets.
- **Middleware** is a function that intercepts route handlers, adding some kind of information. It needs to be mounted using the method `app.use(<path>, <middlewareFunction>)`:
  - `<path>` is optional. If you don’t pass it, the middleware will be executed for all requests.
- :arrow_forward: **Challenge**: Mount the `express.static()` middleware to the path `/public` with the `app.use()`. The `absolute` path to the assets folder is `__dirname + /public`. If succeed, your UI should look a little better now!

  ``` js
  // myApp.js
  // ...
  app.use("/public", express.static(__dirname + "/public"));
  module.exports = app;
  ```

### 4. Serve JSON on a Specific Route

- While an HTML server serves HTML, an API serves data.

  **REST API** (REpresentational State Transfer API)
  : Simply allows data exchange, without the need for clients to know any detail about the server.
  : The client only needs to know where the resource is (*the URL*), and the action it wants to perform on it.

  **JSON**
  : It is a  preferred data format for moving information around the web.
  : Represents a JavaScript object as a string.

- The **`res.json()`** method:
  - Create a simple API by creating a route that responds with JSON using `res.json(<JSON>)` and passing in an Object into the route handler and with some HTTP methods such as: GET (`app.get()`);...
  - This method closes the request-response loop, returning the data. It converts a valid JavaScript object into a string, then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back. A valid object has the usual structure `{<key>: <data>}`.

- :arrow_forward: **Challenge**: Serve the object `{"message": "Hello json"}` as a response ("JSON"), in JSON format, to GET requests to the `/json` route. You can do it, as usual, with the `app.get()` method. Inside the route handler, use the method `res.json()` Then point your browser to `your-app-url/json`, and you should see the message on the screen.

  ``` js
  // myApp.js
  // ...
  app.get("/json", function (req, res) {
    res.json({
      message: "Hello json",
    });
  });
  module.exports = app;
  ```

### 5. The `.env` File

- The `.env` file:
  - a **hidden**, **secret** file, only you can access it.
  - that is used to:
    - Pass environment variables of the application.
    - Store data that you want to keep private or hidden such as API keys from external services; your database URL.
    - Store configuration options.
- Declare the environment variables into `.env` file by convention:
  - There cannot be space around the equals sign when assigning values to variables, e.g. ~~`VAR_NAME = value`~~ > `VAR_NAME=value`.
  - Don’t need to wrap names or values in quotes `""` or `''`.
- Accessible the environment variables from the app using `process.env.<VAR_NAME>`
  - **Note**: `process.env` object
    - It is a global Node object.
    - Variables are passed as strings
    - The variable names are all uppercase, with words separated by an underscore
- Example:

  ``` js
  <!-- The .env file -->
  API_KEY=abjs1221kksa21sadspopcu21

  <!-- myApp.js -->
  require("dotenv").config();
  console.log(process.env.API_KEY);
  ```

- :arrow_forward: **Challenge**: Create a `.env` file in the root of your project directory, and store the variable `MESSAGE_STYLE=uppercase` in it.
  - Use the `/json` GET route handler you created in the last challenge access `process.env.MESSAGE_STYLE`.
  - Transform the response object's message to uppercase if the variable equals uppercase. The response object should either be `{"message": "Hello json"}` or `{"message": "HELLO JSON"}`, depending on the `MESSAGE_STYLE` value.
  - Note that you must read the value of `process.env.MESSAGE_STYLE` inside the route handler, not outside of it, due to the way our tests run.

  ``` js
  let express = require("express");
  let app = express();
  require("dotenv").config();

  app.get("/json", function (req, res) {
    let response =
      process.env.MESSAGE_STYLE === "uppercase"
        ? "Hello json".toUpperCase()
        : "Hello json";

    res.json({
      message: response,
    });
  });
  module.exports = app;
  ```

### 6. Implement a Root-Level Request Logger Middleware

- **Middleware functions** are functions that take 3 arguments: the  *request* object, the *response* object, and the next *function* in the application’s request-response cycle. These functions execute some code that can have side effects on the app and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, `next()`.
- Example:
  
  ``` js
  function(req, res, next) {
    console.log("I'm a middleware...");
    next();
  }
  ```

- :arrow_forward: **Challenge**: Build a simple logger. For every request, it should log to the console a string taking the following format: `method path - ip`. An example would look like this: `GET /json - ::ffff:127.0.0.1`.
  - Note that there is a space between method and path and that the dash separating path and ip is surrounded by a space on both sides.
  - You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using `req.method`, `req.path` and `req.ip`.
  - Remember to call `next()` when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.

  ``` js
  // myApp.js
  app.use(function (req, res, next) {
    let method = req.method;
    let path = req.path;
    let ip = req.ip;
    console.log(`${method} ${path} - ${ip}`);
    next();
  });
  app.get("/json", function (req, res) {
    let response =
      process.env.MESSAGE_STYLE === "uppercase"
        ? "Hello json".toUpperCase()
        : "Hello json";

    res.json({
      message: response,
    });
  });
  module.exports = app;
  ```

### 7. Chain Middleware to Create a Time Server

- Middleware can be mounted at a specific route using `app.<METHOD>(<path>, <middlewareFunction>)`. Middleware can also be chained within a route definition.
- Example:

  ``` js
  app.get('/user', function(req, res, next) {
    req.user = getTheUserSync();  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.send(req.user);
  });
  ```

- This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data. At each point of the middleware stack, you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases.

- :arrow_forward: **Challenge**: In the route `app.get('/now', ...)` chain a middleware function and the final handler. In the middleware function, you should add the current time to the request object in the `req.time` key.
  - You can use `new Date().toString()`.
  - In the handler, respond with a JSON object, taking the structure `{time: req.time}`.

  ``` js
  // myApp.js
  app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    function (req, res) {
      res.send({ time: req.time });
    }
  );
  module.exports = app;
  ```

### 8. Get Route Parameter Input from the Client

- When building an API, we have to allow users to communicate to us what they want to get from our service. For example, if the client is requesting information about a user stored in the database, they need a way to let us know which user they're interested in. One possible way to achieve this result is by using route parameters.
- **Route parameters** are named segments of the URL, delimited by slashes `(/)`. Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the `req.params` object.
- Example:

  ``` js
  route_path: '/user/:userId/book/:bookId'
  actual_request_URL: '/user/546/book/6754'
  req.params: {userId: '546', bookId: '6754'}
  ```

- :arrow_forward: **Challenge**: Build an echo server, mounted at the route `GET /:word/echo`.
  - Respond with a JSON object, taking the structure `{echo: word}`.
  - You can find the word to be repeated at `req.params.word`.
  - You can test your route from your browser's address bar, by visiting some matching routes, e.g. `your-app-rootpath/freecodecamp/echo`.

  ``` js
  app.get("/:word/echo", (req, res, next) => {
    let wordParam = req.params.word;
    res.json({
      echo: wordParam,
    });
  });
  ```

### 9. Get Query Parameter Input from the Client

- Another common way to get input from the client is by encoding the data after the route path, using a query string.
- The **query string** also gets input from the client by encoding the data after the route path. It is delimited by a question mark `(?)` and includes field=value couples. Each couple is separated by an ampersand `(&)`.
- Express can parse the data from the query string, and populate the object `req.query`.
- Example:

  ``` js
  route_path: '/library'
  actual_request_URL: '/library?userId=546&bookId=6754'
  req.query: {userId: '546', bookId: '6754'}
  ```

- **Note**: Some characters, like the percent `(%)`, cannot be in URLs and have to be encoded in a different format before you can send them. If you use the API from JavaScript, you can use specific methods to encode/decode these characters.

- :arrow_forward: **Challenge**: Build an API endpoint, mounted at `GET /name`. Respond with a JSON document, taking the structure `{ name: 'firstname lastname'}`.
  - The first and last name parameters should be encoded in a query string e.g. `?first=firstname&last=lastname`.

  ``` js
  app.get("/name", (req, res, next) => {
    let lstQuery = req.query;
    res.json({
      name: `${lstQuery.first} ${lstQuery.last}`,
    });
  });
  ```

### 10. Use body-parser to Parse POST Requests

- Besides `GET`, `POST` is the default method used to send client data with HTML forms.
- In the REST convention, `POST` is used to send data to create new items in the database (a new user, or a new blog post).
- In this kind of request, the data doesn’t appear in the URL, it is hidden in the request body.
  - The **body** is a part of the HTTP request, also called the payload. Even though the data is not visible in the URL, this does not mean that it is private. To see why to look at the raw content of an HTTP POST request:

    ``` js
    POST /path/subpath HTTP/1.0
    From: john@example.com
    User-Agent: someBrowser/1.0
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 20

    name=John+Doe&age=25
    ```

  - As you can see, the body is encoded like a query string. This is the default format used by HTML forms. With Ajax, you can also use JSON to handle data having a more complex structure.

- The `body-parser` package allows you to use a series of middleware, which can decode data in different formats.

- :arrow_forward: **Challenge**: `body-parser` has already been installed and is in your project's `package.json` file. Require it at the top of the `myApp.js` file and store it in a variable named `bodyParser`.
  - The middleware to handle URL encoded data is returned by `bodyParser.urlencoded({extended: false})`.
  - Pass the function returned by the previous method call to `app.use()`. As usual, the middleware must be mounted before all the routes that depend on it.

  ``` js
  app.use(bodyParser.urlencoded({ extended: false }));
  ```

- **Note**: `extended` is a configuration option that tells `body-parser` which parsing needs to be used. When`extended=false`: it uses the classic encoding querystring library. When `extended=true` it uses qs library for parsing.
  - When using `extended=false`, values can be only strings or arrays. The object returned when using querystring does not prototypically inherit from the default JavaScript Object, which means functions like `hasOwnProperty`, `toString` will not be available. The extended version allows more data flexibility, but it is outmatched by JSON.

### 11. Get Data from POST Requests

- Mount a POST handler at the path `/name`. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the `body-parser` is configured correctly, you should find the parameters in the object `req.body`. Have a look at the usual library example:

  ``` js
  route: POST '/library'
  urlencoded_body: userId=546&bookId=6754
  req.body: {userId: '546', bookId: '6754'}
  ```

- There are several other HTTP methods other than `GET` and `POST`. And by convention, there is a correspondence between the HTTP verb, and the operation you are going to execute on the server. The conventional mapping is:
  - `POST` (sometimes `PUT`): Create a new resource using the information sent with the request.
  - `GET`: Read an existing resource without modifying it.
  - `PUT` or `PATCH` (sometimes `POST`) - Update a resource using the data sent.
  - `DELETE`: Delete a resource.
- There are also a couple of other methods which are used to negotiate a connection with the server. Except for GET, all the other methods listed above can have a payload (i.e. the data into the request body). The body-parser middleware works with these methods as well.

- :arrow_forward: **Challenge**: Respond with the same JSON object as before: `{name: 'firstname lastname'}`. Test if your endpoint works using the HTML form we provided in the app frontpage.

  ``` js
  /*
    If you use next(), you getting this error "[ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
    Solution 1 or 2:
      1. Remove next()
      2. Add ‘return’ before `res.json()`
  */
  app.use(bodyParser.urlencoded({ extended: false }));
  app.post("/name", (req, res) => {
    let fname = req.body.first;
    let lname = req.body.last;
    res.json({
      name: `${fname} ${lname}`,
    });
  });
  ```

**<div style="text-align: end; font-size: 15px;">[⬆ back to Top](#back-end-development-and-apis)</div>**

---

## MongoDB and Mongoose

> - **MongoDB** is a database application that stores JSON documents (or records) that you can use in your application. MongoDB is a non-relational or "NoSQL" database, it's means MongoDB stores all associated data within one record, instead of storing it across many preset tables as in a SQL database.
> - **Mongoose** is a popular npm package for interacting with MongoDB. With Mongoose, you can use plain JavaScript objects instead of JSON, which makes it easier to work with MongoDB.

- **Solution of Course**:
  - [File `myApp.js`](boilerplate-mongomongoose/myApp.js)
  - [Full Source `boilerplate-npm.rar`](boilerplate-mongomongoose/boilerplate-mongomongoose.rar)

### 1. Install and Set Up Mongoose

- In my course, I choose a clone repository from GitHub.
  - This is the GitHub repo [boilerplate-mongomongoose](https://github.com/freeCodeCamp/boilerplate-mongomongoose/).
  - `git clone https://github.com/freeCodeCamp/boilerplate-mongomongoose.git`.
- Setup a MongoDB Atlas database follow [this tutorial](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)

- Connect to the database using the following syntax:
  `mongoose.connect(<Your_URI>, { useNewUrlParser: true, useUnifiedTopology: true });`

  :arrow_forward: Challenge: Setup and connected with database

    ``` js
    <!-- .env file -->
    MONGO_URI="mongodb+srv://<username>:<password>@cluster0.gb5bnce.mongodb.net/<dbname>?retryWrites=true&w=majority"

    <!-- myApp.js file -->
    const mongoose = require("mongoose");
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    ```

### 2. Create a module - Schema

A Schema
: Each schema maps to a MongoDB collection.
: It defines the shape of the documents within that collection.
: Schemas are building blocks for Models.
:  A model allows you to create instances of your objects, called documents.

- :arrow_forward: Challenge: Create a model from the `personSchema` and assign it to the existing variable `Person`.
  - A required `name` field of type `String`
  - An `age` field of type `Number`
  - A `favoriteFoods` field of type `[String]`.

  ``` js
  const Schema = mongoose.Schema;
  //If you don't assign it mongoose.Schema to the existing Schema
  //  you must use mongoose.Schema for each instead of Schema.

  const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
  });

  const Person = mongoose.model("Person", personSchema);
  ```

### 3. Create and Save a Record of a Model

- **Note**: Then, call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.
  
  ``` js
  // ...
  person.save(function(err, data) {
    //   ...do your stuff here...
  });
  ```

- :arrow_forward: **Challenge**: Within the `createAndSavePerson` function, create a document instance using the `Person` model constructor you built before.
  - Pass to the constructor an object having the fields `name`, `age`, and `favoriteFoods`.
  - Call the method `document.save()` on the returned document instance

  ``` js
  const Schema = mongoose.Schema;

  const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
  });

  const Person = mongoose.model("Person", personSchema);

  const createAndSavePerson = (done) => {
    let dev = new Person({
      name: "Khang",
      age: 22,
      favoriteFoods: ["Chocolate", "Candy", "Milk", "Coffee"],
    });

    dev.save((err, data)=> {
      if (err) {
        console.log(err);
      } else {
        done(null, data);
      }
    });
  };
  ```

### 4. Create Many Records with model.create()

- To create many instances of models, e.g when seeding a database with initial data, you can use `<Model>.create()` - it takes an array of objects as the first argument, and saves them all in the database.

- :arrow_forward: **Challenge**: Modify the `createManyPeople` function to create many people using `Model.create()` with the argument `arrayOfPeople`.

  ``` js
  let arrayOfPeople = [
    {
      name: "Khang",
      age: 22,
      favoriteFoods: ["Chocolate", "Candy", "Milk", "Coffee"],
    },
    {
      name: "Hieu",
      age: 21,
      favoriteFoods: ["Fruit", "Milktea", "Hotpot"],
    },
  ];
  const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        done(null, data);
      }
    });
  };
  ```

### 5. Use model.find() to Search Your Database

- In its simplest usage, `<Model>.find()` accepts a query document (a JSON object) as the first argument, then a callback. Example: `<Model>.find({},()=>{})` It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.

- :arrow_forward: **Challenge**: Modify the `findPeopleByName` function to find all the people having a given name, using `Model.find() -> [Person]`
  - Use the function argument `personName` as the search key..

  ``` js
  const findPeopleByName = (personName, done) => {
    Person.find(
      {
        name: personName,
      },
      (err, data) => {
        if (err) console.log(err);
        else done(null, data);
      }
    );
  };
  ```

### 6. Use model.findOne() to Return a Single Matching Document from Your Database

- `<Model>.findOne()` behaves like `<Model>.find()`, but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.

- :arrow_forward: **Challenge**: Modify the `findOneByFood` function to find just one person which has a certain food in the person's favorites, using `Model.findOne() -> Person`.
  - Use the function argument `food` as search key.

  ``` js
  const findOneByFood = (food, done) => {
    Person.findOne(
      {
        favoriteFoods: food,
      },
      (err, data) => {
        if (err) console.log(err);
        else done(null, data);
      }
    );
  };
  ```

### 7. Use model.findById() to Search Your Database By _id

- When saving a document, MongoDB automatically adds the field `_id`, and set it to **a unique alphanumeric key**. Searching by `_id` is an extremely frequent operation, so Mongoose provides a dedicated method for it, using: `<Model>.findById()`.

- :arrow_forward: **Challenge**: Modify the `findPersonById` to find the only person having a given `_id`, using `Model.findById() -> Person`. Use the function argument `personId` as the search key.

  ``` js
  const findPersonById = (personId, done) => {
    Person.findById(
      {
        _id: personId,
      },
      (err, data) => {
        if (err) console.log(err);
        else done(null, data);
      }
    );
  };
  ```

### 8. Perform Classic Updates by Running Find, Edit, then Save

- In the good old days, this was what you needed to do if you wanted to edit a document, and be able to use it somehow (e.g. sending it back in a server response). Mongoose has a dedicated updating method: `<Model>.update()`. It is bound to the low-level mongo driver. It can bulk-edit many documents matching certain criteria, but it doesn’t send back the updated document, only a 'status' message. Furthermore, it makes model validations difficult, because it just directly calls the mongo driver.

- :arrow_forward: **Challenge**: Modify the `findEditThenSave` function to find a person by `_id` (use any of the above methods) with the parameter `personId` as search key. Add `"hamburger"` to the list of the person's `favoriteFoods` (you can use `Array.push()`). Then - inside the find callback - `save()` the updated `Person`.

  ``` js
  const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById(
      {
        _id: personId,
      },
      (err, result) => {
        if (err) console.log(err);
        else {
          result.favoriteFoods.push(foodToAdd);
          result.save((errS, data) => {
            if (errS) console.log(errS);
            else done(null, data);
          });
        }
      }
    );
  };
  ```

### 9. Perform New Updates on a Document Using model.findOneAndUpdate()

- Recent versions of Mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the classic method is still useful in many situations. `findByIdAndUpdate()` can be used when searching by id.

- :arrow_forward: **Challenge**: Modify the `findEditThenSave` function to find a person by `_id` (use any of the above methods) with the parameter `personId` as search key. Add `"hamburger"` to the list of the person's `favoriteFoods` (you can use `Array.push()`). Then - inside the find callback - `save()` the updated `Person`.

  ``` js
  const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true },
      (err, result) => {
        if (err) console.log(err);
        else {
          done(null, result);
        }
      }
    );
  };
  ```

### 10. Delete One Document Using model.findByIdAndRemove

- findByIdAndRemove and findOneAndRemove are like the previous update methods. They pass the removed document to the database. As usual, use the function argument personId as the search key.

- :arrow_forward: **Challenge**: Modify the removeById function to delete one person by the person's _id. You should use one of the methods findByIdAndRemove() or findOneAndRemove().

  ``` js
  const removeById = (personId, done) => {
    Person.findByIdAndRemove(
      {
        _id: personId,
      },
      (err, data) => {
        if (err) console.log(err);
        else done(null, data);
      }
    );
  };
  ```

### 11. Delete Many Documents with model.remove()

- `<Model>.remove()` is useful to delete all the documents matching the given criteria.

- :arrow_forward: **Challenge**: Modify the `removeManyPeople` function to delete all the people whose name is within the variable `nameToRemove`, using `Model.remove()`. Pass it to a query document with the `name` field set, and a callback.
- Note: The Model.remove() doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the done() callback, since we use it in tests.

  ``` js
  const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove(
      {
        name: nameToRemove,
      },
      (err, data) => {
        if (err) console.log(err);
        else done(null, data);
      }
    );
  };
  ```

### 12. Chain Search Query Helpers to Narrow Search Results

- If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec(). You always need to pass your callback to this last method. There are many query helpers, here we'll use the most commonly used.

- :arrow_forward: **Challenge**: Modify the `queryChain` function to find people who like the food specified by the variable named `foodToSearch`. Sort them by `name`, limit the results to two documents, and hide their age. Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`. Pass the `done(err, data)` callback to `exec()`.

  ``` js
  const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({
      favoriteFoods: foodToSearch,
    })
      .sort({ name: 1 })
      .limit(2)
      .select({ name: true })
      .exec((err, result) => {
        if (err) console.error(err);
        else done(null, result);
      });
  };
  ```

**<div style="text-align: end; font-size: 15px;">[⬆ back to Top](#back-end-development-and-apis)</div>**

---

## Back End Development and APIs Projects ^soon^

### Project 1: Timestamp Microservice

- Reference: [freeCodeCamp: Timestamp Microservice project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)
- Demo project: [Timestamp Microservice](https://timestamp-microservice.freecodecamp.rocks/)

#### Install and Setup

- In my project, I choose a clone repository from GitHub.
  - This is the GitHub repo [boilerplate-project-timestamp](https://github.com/freeCodeCamp/boilerplate-project-timestamp/).
  - `git clone https://github.com/freeCodeCamp/boilerplate-project-timestamp.git`

#### Requirement and Test

- **Note**: Timezones conversion is not a purpose of this project, so assume all sent valid dates will be parsed with `new Date()` as GMT dates.
  - [ ] You should provide your own project, not the example URL.
  - [ ] A request to `/api/:date?` with a valid date should return a JSON object with a `unix` key that is a Unix timestamp of the input date in milliseconds (as type Number).
  - [ ] A request to `/api/:date?` with a valid date should return a JSON object with a `utc` key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`.
  - [ ] A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`.
  - [ ] Your project can handle dates that can be successfully parsed by `new Date(date_string)`.
  - [ ] If the input date string is invalid, the API returns an object having the structure `{ error : "Invalid Date" }`.
  - [ ] An empty date parameter should return the current time in a JSON object with a `unix` key.
  - [ ] An empty date parameter should return the current time in a JSON object with a `utc` key.

#### Solution

**<div style="text-align: end; font-size: 15px;">[⬆ back to Top](#back-end-development-and-apis)</div>**

### Project 2: Request Header Parser Microservice

### Project 3: URL Shortener Microservice

### Project 4: Exercise Tracker

### Project 5: File Metadata Microservice
