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

// Connect to Bamazon MySQL database and call queryInventory + queryPurchase functions
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(
        "************************************************************",
        "\nWelcome to Bamazon!",
        "\nThe following produts are available for purchase today:"
    );
    queryInventory();
});
  
// Define queryInventory function - logs all available items
function queryInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("Item ID | Product Name | Department Name | Price ($) | Stock Quantity");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("---------------------------------------------------------");
        promptUser();
    })
};

// Define promptUser function - questions to determine what to buy, and updates db accordingly
function promptUser() {
    inquirer.prompt([
        
        // Use inquirer to ask users what they wish to buy
        {
            type: "input",
            name: "item",
            message: "Please provide the Item ID of the product you wish to purchase:"
        },
        
        // Next, ask how much of that item they would like to purchase
        {
            type: "input",
            name: "quantity",
            message: "How much of this item would you like to purchase?"
        }
        
        // Check if Bamazon has enough supply of that particular item
    ]).then(function(response) {
        console.log(response);
    })
}