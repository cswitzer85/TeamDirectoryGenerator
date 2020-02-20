const employee = require("./employee")
const intern = new employee(name, idNumber, schoolName, emailAddress, confirmType);

intern.printInfo();

// const inquirer = require("inquirer")

// function promptUser() {
// 	return inquirer.prompt([{
// 			type: "input",
// 			name: "name",
// 			message: "What is the name of your intern?"
// 		},
// 		{
// 			type: "input",
// 			name: "idNumber",
// 			message: "What is their ID number?"
//         },
//         {
// 			type: "input",
// 			name: "emailAddress",
// 			message: "What is their e-mail address?"
//         },
// 		{
// 			type: "input",
// 			name: "schoolName",
// 			message: "What is the name of the school that they attended?"
// 		},
//         {
// 			type: "confirm",
// 			name: "confirmType",
//             message: "Would you like to add another employee?",
//             default: false,
//         },
//     ]);
// }

//     promptUser();
