const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let employeeList = [];

function managerPrompts() {
    console.log("Please build your team here.")
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerID",

            message: "What is your manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is your manager's office number?"
        },

    ]).then(function (answer) {
        let managerName = answer.managerName;
        let managerID = answer.managerID;
        let managerEmail = answer.managerEmail;
        let managerNumber = answer.managerNumber;

        let manager = new Manager(managerName, managerID, managerEmail, managerNumber);

        employeeList.push(manager);
        console.log("Start building your team!");
        employeePrompts();

    });

    function employeePrompts() {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "What is your employee's role?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "employeeName",
                message: "What is your employee's name?"
            },
            {
                type: "input",
                name: "employeeID",
                message: "What is your employee's ID?"
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is your employee's email?"
            }

        ]).then(function (answer) {
            let employeeType = answer.employeeType;
            let employeeName = answer.employeeName;
            let employeeID = answer.employeeID;
            let employeeEmail = answer.employeeEmail;

            if (employeeType === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "What is your engineer's GitHub username?"
                    },
                    {
                        type: "list",
                        name: "additionalEmployee",
                        message: "Would you like to add another employee?",
                        choices: ["Yes", "No"]
                    }

                ]).then(function (answer) {

                    let github = answer.github;

                    let engineer = new Engineer(employeeName, employeeID, employeeEmail, github);

                    employeeList.push(engineer);

                    if (answer.additionalEmployee === "Yes") {
                        employeePrompts();

                    } else {
                        employeeTeam();
                        return;
                    }
                });

            } else {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What school does your intern go to?"
                    },
                    {
                        type: "list",
                        name: "additionalEmployee",
                        message: "Would you like to add another employee?",
                        choices: ["Yes", "No"]
                    }
                    
                ]).then(function (answer) {

                    let internSchool = answer.internSchool;

                    let intern = new Intern(employeeName, employeeID, employeeEmail, internSchool);

                    employeeList.push(intern);

                    if (answer.additionalEmployee === "Yes") {
                        employeePrompts();

                    } else {
                        employeeTeam();
                        return;
                    }
                });
            }
        })
    }

}
// console.log(employeeList);
function employeeTeam() {
    fs.writeFileSync(outputPath, render(employeeList), "utf8", function (err) {
        console.log("You've created your team!")
    });
}

managerPrompts();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
