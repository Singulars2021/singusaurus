---
id: javascript_npm
title: NPM
slug: /javascript_npm
---

### NPM    

### 1. What is a package manager in modern Front End Development?

> A package manager is a system or set of tools used to automate the installation, update,
> configuration, and use of software. ... Most package managers are designed to detect
> and install development tools.

### 2. What is NPM?

> npm is the world's largest software registry. Open source developers from
> every continent use npm to share and borrow packages, and many
> organizations use npm to manage private development as well.

npm consists of three distinct components:

##### :point_right: The website
Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

##### :point_right: The Command Line Interface (CLI)
The CLI runs from a terminal, and is how most developers interact with npm.

##### :point_right: The registry
The registry is a large public database of JavaScript software and the meta-information surrounding it.

### 3. How can you install NPM? Does it matter which operating system are you using?
#### Install for Windows

Npm Enterprise requires npm 4.4.x or greater. To download the latest version of npm, on the command line, run the following command:

`npm install -g npm`

##### Checking your version of npm 
To see if you already have npm installed and check the installed version, run the following commands:

`npm -v`

#### Install for MAC
To install Npm on Mac, you will need to open a terminal window and follow the steps shown below:

##### 1. For the installation of npm we will use nvm (Node Version Manager). Enter the following command to install nvm:
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash`

##### 2. Next, verify the nvm installation using the following command, which should display the nvm version number:
`command -v nvm`
##### 3. It is recommended that you do an additional verification. Open the ~ / .bash_profile file and make sure the source ~ / .bashrc line is written to it, anywhere in the file. Then restart the terminal.

##### 4. Finally, run the npm -v commands to verify that npm has been installed correctly:
`$ npm -v 6.14.4`

### 5. Have a look at this [package.json](https://github.com/Singulars2021/singusaurus/blob/main/package.json). What is the purpouse of the __dependencies__ field?

It is what is necessary for the project to work and at the same time allows the download of these through a simple command.
### 6. Once you download a Github with a package.json, how can you install all the dependencies of this project?

El comando para instalar las dependencias:
`npm install`
### 7. How can you run a script described in the __scripts__ field of the package.json file? (You can use our previous file example)

In this way the script "serve" is executed:
`npm run serve`

### 8. Imagine we want to use this [SCSS compiler](https://www.npmjs.com/package/sass) **globally in our computer**. How do you install it with NPM so you can execute the compier in any folder/project?

You can install Sass globally using:
 In this way the script "serve" is executed:
`npm install -g sass ` which will provide access to the sass executable. You can also add it to your project using `npm install --save-dev sass`.
### 9. Find a command with NPM that will tell you all the packages that you have installed **globally** in your computer

`npm list -g --depth 0`

Let’s break this line down a little bit, shall we?

* npm: the Node package manager command line tool.
* list -g: display a tree of every package found in the user’s folders (without the -g option it only shows the current directory’s packages).
* — depth 0 / — depth=0: avoid including every package’s dependencies in the tree view.

#### Use npm to . . .

* Adapt packages of code for your apps, or incorporate packages as they are.
* Download standalone tools you can use right away.
* Run packages without downloading using npx.
* Share code with any npm user, anywhere.
* Restrict code to specific developers.
* Create organizations to coordinate package maintenance, coding, and developers.
* Form virtual teams by using organizations.
* Manage multiple versions of code and code dependencies.
* Update applications easily when underlying code is updated.
* Discover multiple ways to solve the same puzzle.
* Find other developers who are working on similar problems and projects.


### NPM learning resource

- Link a Github repository with the tag [**awesome**](https://github.com/sindresorhus/awesome-npm) about NPM.

- Youtube video about a [**guide fast**](https://www.youtube.com/watch?v=4aNA8ZHihFE) to learn NPM.

-  [**Cheatsheet**](https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/) about how the use the most common command in NPM

### :pushpin: External links

Build amazing things (n.d.). Retrieved January 13, 2021, from [npmjs.com](https://www.npmjs.com/)

What is NPM? (n.d.). Retrieved January 13, 2021, from [W3SCHOOLS](https://www.w3schools.com/nodejs/nodejs_npm.asp)

Library (computing) - Wikipedia. (n.d.). Retrieved January 13, 2021, from [Wiki NPM)](https://es.wikipedia.org/wiki/Npm)
