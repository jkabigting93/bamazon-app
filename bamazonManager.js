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
    inquirer.prompt([
        {
            type: "list",
            name: "actionChoice",
            message: "The following actions are available to you:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then(function(response) {
        switch (response.actionChoice) {
            case "View Products for Sale":
                connection.query("SELECT * FROM products", function(err, res) {
                    if (err) throw err;
                    console.log("Item ID | Product Name | Price ($) | Stock Quantity");
                    for (var i = 0; i < res.length; i++) {
                        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity)
                    }
                    console.log("---------------------------------------------------------");
                    managerRestart();
                })
                break;
            case "View Low Inventory":

                break;
            case "Add to Inventory":
                break;
            case "Add New Product":
                break;
        };
    })
}

// Define function to restart after picking an option
function managerRestart() {
    inquirer.prompt([
        {
            type: "input",
            name: "restart",
            message: "Would you like to perform another function? (y/n)"
        }
    ]).then(function(response) {
        if (response.restart === "y") {
            managerActions();
        } else {
            console.log(
                "Goodbye!",
                "\n************************************************************"
            );
            connection.end();
        }
    })
}