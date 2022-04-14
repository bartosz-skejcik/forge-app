var inquirer = require("inquirer");
var fs = require("fs");
const { Static } = require("../lib/utils");

let projectDir = "";

// create a prompt that asks user to enter a project name
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName",
        default: "project"
    },
    {
        type: "list",
        message: "Which framework would you like to use?",
        choices: ["Static", "React", "Next"],
        name: "framework"
    }
]).then(function(res) {

        // create a new folder with the name of the project
        // and move into that folder
        fs.mkdir(res.projectName, function(err) {
            if (err) {
                console.log(err);
            } else {
                projectDir = `${process.cwd()}\\${res.projectName}`;
            }

            switch(res.framework) {
                case "Static":
                    inquirer.prompt([
                        {
                            type: "checkbox",
                            message: "What would you like to include?",
                            choices: ["index.html", "style.css", "assets"],
                            name: "include"
                        },
                        {
                            type: "confirm",
                            message: "Would you like to include TailwindCSS?",
                            name: "tailwind"
                        }
                    ]).then(function(res) {
                        Static(fs, projectDir, res.include, res.tailwind);
                    });
                    break;
                case "Next":
                    Next();
                    break;
                case "React":
                    React();
                    break;
            }
        })
        
    });