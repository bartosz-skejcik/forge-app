#! /usr/bin/env node
var inquirer = require("inquirer");
var fs = require("fs");
const { Static, Next, React } = require("../lib/utils");

let projectDir = "";
let projectName = "";

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
]).then(function (res) {

    // create a new folder with the name of the project
    // and move into that folder
    if (fs.existsSync(res.projectName)) {
        console.log("\nThat project name is already taken. Please try again.\n".red);
        return;
    } else {
        projectName = res.projectName;
        fs.mkdir(res.projectName, function (err) {
            if (err) {
                console.log(err);
            } else {
                projectDir = `${process.cwd()}/${res.projectName}`;
            }

            switch (res.framework) {
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
                    ]).then(function (res) {
                        Static(fs, projectDir, res.include, res.tailwind);
                    });
                    break;
                case "Next":
                    inquirer.prompt([
                        {
                            type: "confirm",
                            message: "Would you like to include TailwindCSS?",
                            name: "tailwind"
                        },
                        {
                            type: "confirm",
                            message: "Would you like to create the project in TypeScript?",
                            name: "typescript"
                        },
                        {
                            type: "confirm",
                            message: "Would you like to include ESLint?",
                            name: "eslint"
                        },
                        {
                            type: "confirm",
                            message: "Would you like to include Prettier?",
                            name: "typescript"
                        }
                    ]).then(function (res) {
                        Next(projectDir, res.tailwind, res.typescript, projectName, res.eslint, res.prettier);
                    });
                    break;
                case "React":
                    inquirer.prompt([
                        {
                            type: "confirm",
                            message: "Would you like to include TailwindCSS?",
                            name: "tailwind"
                        }
                    ]).then(function (res) {
                        React(projectDir, res.tailwind, res.typescript, projectName);
                    });
                    break;
            }
        })
    }

});