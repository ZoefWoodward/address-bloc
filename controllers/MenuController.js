const inquirer = require('inquirer');
let date = require('date-and-time');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
             type: "list",
              name: "mainMenuChoice",
              date: "mainMenuChoice",
              message: "Please choose from an option below: ",
              choices: [
                "Add new contact",
                "Get current date and time",
                "Exit"
              ]
            }
          ];
          this.contacts = [];
        }

    main(){
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
          switch(response.mainMenuChoice){
            case "Add new contact":
              this.addContact();
              break;
            case "Get current date and time":
              this.getDate();
              break;
            case "Exit":
              this.exit();
            default:
              console.log("Invalid input");
              this.main();
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }

    clear(){
        console.log("\x1Bc");
    }

    getDate(){
      date.now();
      console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss'));
      this.main();
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
      }

      exit(){
        console.log("Thanks for using AddressBloc!");
        process.exit();
      }

    }