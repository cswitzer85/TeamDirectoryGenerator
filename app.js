// Classes
// The project must have the these classes: Employee, Manager, Engineer, Intern. The tests for these classes in the tests directory must all pass.

// The first class is an Employee parent class with the following properties and methods:
//         name
//         id
//         title
//         getName()
//         getId()
//         getEmail()
//         getRole() // Returns 'Employee'

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:
//         officeNumber
//         getRole() // Overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have:
//         github // GitHub username
//         getGithub()
// getRole() // Overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have:
//         school
//         getSchool()
//         getRole() // Overridden to return 'Intern'

// User input
//         The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

// Roster output
//         The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:
//         Name
//         Role
//         ID

// Role-specific property (School, link to GitHub profile, or office number)

// Bonus
// Use validation to ensure that the information provided is in the proper expected format.

// Add the application to your portfolio.

//user defined inquiry

var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 9001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


module.exports = function(app) {
  //Get Requests
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../templates/main.html"));
  });
};
//pklkjhkhkjhkjhkjhkjhkjkhgjdfdfsAasdfsadyujkiuydfsxcghjuiytrdsxcvbnjkiuytrdfcvbnjk
var tableData = require("../data/tableData");

module.exports = function(app) {
  
  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });
};
