# Back End Development and APIs

Reference: [FreeCodeCamp: BackEnd](https://www.freecodecamp.org/learn/back-end-development-and-apis)

- [Back End Development and APIs](#back-end-development-and-apis)
  - [Managing Packages with NPM](#managing-packages-with-npm)
    - [The `package.json` file](#the-packagejson-file)
    - [Some of the fields in the `package.json` file](#some-of-the-fields-in-the-packagejson-file)
    - [The `dependencies` field](#the-dependencies-field)
    - [Use special characters to control the Version a Dependency](#use-special-characters-to-control-the-version-a-dependency)

---

## Managing Packages with NPM

> **npm** (Node Package Manager), is a command line tool to install, create, and share packages of JavaScript code written for Node.js.

- **Solution**
  - [File `package.json`](boilerplate-npm/package.json)
  - [Full Source `boilerplate-npm.rar`](boilerplate-npm/boilerplate-npm.rar)

### The `package.json` file

- It is the center of any Node.js project or npm package. It stores information about your project, similar to how the head section of an HTML document describes the content of a webpage.
- It consists of a single JSON object where information is stored in **key-value** pairs.
- There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.
- If you look at the file tree of your project, you will find the package.json file on the top level of the tree.
- **Note**: Remember that you’re writing JSON, so all field names must use double quotes (`""`) and be separated with a comma (`,`).

### Some of the fields in the `package.json` file

1. The author field: **author**
   > It specifies who created the project, and can consist of a string or an object with contact or other details.
   - *Challenge*: Add *your name* as the author of the project in the `package.json` file.

     ``` json
     {
      "author": "Khang Nguyen"
     }
     ```

2. The description field: **description**
   > where a short, but informative description about your project belongs.
   - *Challenge*: Add a description to the package.json file of your project.

     ``` json
     {
      "description": "Khang Nguyen"
     }
     ```

3. The keywords field: **keywords**
   > where you can describe your project using related keywords.
   - *Challenge*: Add an array of suitable strings to the keywords field in the package.json file of your project. One of the keywords should be `freecodecamp`.

     ``` json
     {
      "keywords": [ "freecodecamp", "frontend", "backend"]
     }
     ```

4. The license field: **license**
   > where you inform users of what they are allowed to do with your project.
   - Some common licenses for open-source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do.
   - *Challenge*: Fill the license field in the `package.json` file of your project as you find suitable.

     ``` json
     {
      "license": "MIT"
     }
     ```

5. The version field: **version**
   > One of the **required** fields of your package.json file. This field describes the current version of your project.
   - *Challenge*: Add a version to the `package.json` file of your project.

     ``` json
     {
      "version": "1.0"
     }
     ```

### The `dependencies` field

1. Expand Your Project with External Packages from npm
   - One of the biggest reasons to use a package manager is their powerful dependency management. **npm** automatically installs everything when you set up a project on a new computer. **npm** can know exactly what your project needs based on the `dependencies` section of your `package.json` file.
   - In this section, the packages your project requires are stored using the following format:

     ``` json
      "dependencies":{
          "package-name": "version"
      }
      ```

   - *Challenge*: Add `version 1.1.0` of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.

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
     - The **`MAJOR`** version should increment when you make incompatible API changes.
     - The **`MINOR`** version should increment when you add functionality in a backward-compatible manner.
     - The **`PATCH`** version should increment when you make backward-compatible bug fixes.
   - This means that `PATCHes` are bug fixes and `MINORs` add new features but neither of them breaks what worked before. Finally, `MAJORs` add changes that won’t work with earlier versions.
   - *Challenge*: In the `dependencies` section of your `package.json` file, change the version of `@freecodecamp/example` to match MAJOR version 1, MINOR version 2 and PATCH version 13.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "1.2.13"
      }
     }
     ```

### Use special characters to control the Version a Dependency

1. The Tilde-Character (`~`) to Always Use the Latest Patch Version:
   > To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (~) character.
   - Here's an example of how to allow updates to any **1.3.x** version. `package": "~1.3.8`
   - *Challenge*: In the `package.json` file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (1.2.13). But now, you want to allow the latest `1.2.x` version.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "~1.2.13"
      }
     }
     ```

2. The Caret-Character (`^`) to Use the Latest Minor Version:
   > To allow an npm dependency to update both MINOR updates and PATCHes version, you can use the caret (^).
   - Example: Your current version of `@freecodecamp/example` should be `~1.2.13` which allows npm to install to the latest `1.2.x` version. If you were to use the caret (`^`) as a version prefix instead, npm would be allowed to update to any **1.** **x.x** version `package`": "^1.3.8`
   - *Challenge*: Use the caret (`^`) to prefix the version of `@freecodecamp/example` in your dependencies and allow npm to update it to any new MINOR release.

     ``` json
     {
      "dependencies": {
        "@freecodecamp/example": "^1.2.13"
      }
     }
     ```

3. Remove a Package from Your Dependencies
   > If you want to remove an external package that you no longer need, you only need to remove the corresponding key-value pair for that package from your dependencies.
   - This same method applies to removing other fields in your package.json as well.
   - *Challenge*: Remove the @freecodecamp/example package from your dependencies.

     ``` json
     {
      "dependencies": {}
     }
     ```

**<div style="text-align: end; font-size: 15px;">[⬆ back to Top](#back-end-development-and-apis)</div>**

---
