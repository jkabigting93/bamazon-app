// Initialize MySQL
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mArch1993!",
    database: "bamazon"
});

// Require Inquirer
var inquirer = require("inquirer");

// Connect to Bamazon MySQL database and call managerAction function
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(
        "************************************************************",
        "\nWelcome, Bamazon Manager!"
    );
    managerActions();
});

// Define managerActions function - use switch case block to run various functions based on Manager's inquirer selection
function managerActions() {
    inquirer.promt([
        {
            type: "list",
            name: "actionChoice",
            message: "The following actions are available to you:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then(function(response) {
        switch (response) {
            case response === "View Products for Sale":
                
                break;
            case response === "View Low Inventory":
                break;
            case response === "Add to Inventory":
                break;
            case response === "Add New Product":
                break;
        };
    })
}