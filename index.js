// uses the app.js file we made to start when index.js is ran
// alongside use of inquirer npm
const App = require("./lib/App");
const inquirer = require("inquirer");

// Initialize a new Game object
const app = new App();

// Starts the app
app.start();
