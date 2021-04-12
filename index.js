//import modules -> Employee subclasses, fs, inquirer, path, page-template

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//use path module to define the path to the output directory
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require("./lib/htmlrenderer");
//const Choice = require("inquirer/lib/objects/choice");

//create an array to hold of the team members
const teamMember = [];

//init function

//function to create a manager
function teamApp() {
    function getManager() {
        inquirer.prompt([
            {
                type: "input",
                name:"managerName",
                message: "what is your Manager's name?"
            },
            {
                type: "input",
                name:"managerId",
                message: "what is your Id?"
            },
            {
                type: "input",
                name:"managerEmail",
                message: "what is your Email?"
            },
            {
                type: "input",
                name:"officeNumber",
                message: "Officenumber for manager?"
            }
        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerEmail, response.officeNumber);
            teamMember.push(manager);
            addingnewMember();
        })
    }
    function getEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your Id?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your Email?"
            },
            {
                type: "input",
                name: "JonathanG",
                message: "What is your GitHub name?"
            }
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            teamMember.push(engineer);
            addingnewMember();
        })

    }
    function getIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your Id?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your Email?"
                
            },
            {
                type: "input",
                name: "school",
                message: "School?"
            }
        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamMember.push(intern);
            addingnewMember(); 
        })
    }
    function addingnewMember() {
        inquirer.prompt([
            {
                type: "checkbox",
                name: "selectemployees",
                message: "Want to add new employee?",
                choices: ["engineer", "intern", "manager", "done"]
            }
        ]).then(response => {
            const role = response.selectemployees;
            if (role == "manager") {
                getManager();
            } else if (role == "engineer") {
                getEngineer();
            } else if (role == "intern") {
                getIntern();
            } else if (role == "done") {
                renderTeam();
            }
        });
    }
    addingnewMember();
}
function renderTeam(){
    fs.writeFileSync(outputPath, render(teamMember), "utf-8");
}
teamApp();
//prompt user with questions needed to satisfy the input for a manager object
//.then statment
//create a new instance of manager class
