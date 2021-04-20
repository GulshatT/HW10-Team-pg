//import modules -> Employee subclasses, fs, inquirer, path, page-template

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//use path module to define the path to the output directory
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
//const render = require("./lib/render");
//const Choice = require("inquirer/lib/objects/choice");

//importing a template function
const generateTemplate = require("./src/template");
//const { userInfo } = require("os");
const generateHtml = require("./generate");

//create an array to hold of the team members
const teamMembers = []

//init function

//function to create a manager
function teamApp() {{
        inquirer.prompt([
            {
                type: "input",
                name:"name",
                message: "Enter Employee name",
                validate: function (nameInput) {
                    if (nameInput) {
                        return true;
                    } else {
                        return "Please enter employee name";
                    }
                }
            },
            {
                type: "input",
                name:"email",
                message: "Enter email",
                validate: function (emailInput) {
                    if (emailInput) {
                        return true;
                    } else {
                        return "Please enter employee email address";
                    }
                }
            },
            {
                type: "input",
                name:"id",
                message: "Enter Employee id",
                validate: function (idInput) {
                    if (idInput) {
                        return true;
                    } else {
                        return "Please enter employee id";
                    }
                }

            },
            {
                type: "list",
                name:"role",
                message: "Select role:",
                choices:["Manager", "Engineer", "Intern"]   
            },
        ]).then(answers => {
            if(answers.role === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "Enter office #:",
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return "Please enter office #";
                            }
                        }
                    }                   
                ]).then(response => {
                    console.log(response.office);
                    const ManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    teamMembers.push(ManagerTeam);
                    addOption()
                })
            } else if (answers.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "gitHub",
                        message: "Enter GitHub name",
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return "Please enter GitHub username";
                            }
                        }
                    }
                ]).then(response => {
                    console.log(response.gitHub);
                    const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.gitHub)
                    teamMembers.push(EngineerTeam);
                    addOption()
                })
            } else if (answers.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Enter School name", 
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            }else {
                                return "Please enter school name";
                            }
                        }
                    }
                ]).then(response => {
                    console.log(response.school);
                    const internTeam = new Intern  (answers.name, answers.email, answers.id, answers.role, response.school)
                    teamMembers.push(internTeam);
                    addOption()
                })
            }
            else {
                const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role)
                teamMembers.push(employeeTeam);
                addOption()
            }
                //adding addOption
                function addOption() {
                    inquirer.prompt([
                        {
                            type:"confirm",
                            name: "addMore",
                            message:"Would you like to add another Employee?"
                        }
                    ]).then(res => {
                        if(res.addMore === true) {
                            teamApp(teamMembers);
                        } else {
                            console.log("team", teamMembers)
                            let cardLayoutHtml = generateTemplate(teamMembers);
                            generateHtml(cardLayoutHtml)
                        }
                    })
                }
            })
        }
    }
        teamApp();
//prompt user with questions needed to satisfy the input for a manager object
//.then statment
//create a new instance of manager class
