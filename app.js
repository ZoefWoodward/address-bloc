const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();
let now = new Date();

menu.clear();
menu.main();
now.getDate();