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
                    };
                    console.log("---------------------------------------------------------");
                    managerRestart();
                })
                break;

            case "View Low Inventory":
                connection.query("SELECT * FROM products where stock_quantity < 5", function(err,res) {
                    if (err) throw err;
                    console.log(
                        "The following items have fewer than 5 units left:",
                        "\n",
                        "\nItem ID | Product Name"
                    );
                    for  (var i = 0; i < res.length; i++) {
                        console.log(res[i].item_id + " | " + res[i].product_name)
                    };
                    console.log("---------------------------------------------------------");
                    managerRestart();
                })
                break;

            case "Update Inventory":
                break;
                
            case "Add New Product":
                inquirer.prompt([
                    {
                        type: "input",
                        name: "product_name",
                        message: "What is the name of the product being added?"
                    },
                    {
                        type: "input",
                        name: "department_name",
                        message: "What department is this being stocked in?"
                    },
                    {
                        type: "input",
                        name: "price",
                        message: "How much does each unit cost?"
                    },
                    {
                        type: "input",
                        name: "stock_quantity",
                        message: "How many units are being added?"
                    }
                ]).then(function(response) {
                    var item = response.product_name;
                    var dept = response.department_name;
                    var price = response.price;
                    var amount = response.stock_quantity;
                    connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)", [item, dept, price, amount], function(error, response) {
                        if (error) {
                            console.log(
                                "Add Product failed.",
                                "\n---------------------------------------------------------"
                            );
                            managerRestart();
                        } else {
                            console.log("The item has successfully been added!");
                            managerRestart();
                        };
                    });
                })
                break;
            };
        }
    )
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