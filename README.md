# bamazon-app

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

This node.js app is an Amazon-like storefront that stores its data on a MySQL database. The app will take in orders from customers and deplete stock from the store's inventory. Additionally, department managers have access to a separate app that can view and update the database as needed.

2. Give a high-level overview of how the app is organized

This app contains some dummy data on a store inventory. On startup, customers are given a list of store inventory, prompted to pick an item, and asked how much of the product they want. On Manager startup, they are given four actions that they can perform. On completion, both customers and managers are given the option to perform another action, or to disconnect the app.

3. Give start-to-finish instructions on how to run the app

Firstly, ensure that the MySQL database is set up by running the schema file on MySQL workbench. Next, run an npm install on the root folder. Then, initialize the app in the command line.

### Customers

Initialize the customer app through the command "node bamazonCustomer.js". A list of current inventory will populate on the console, and you will be asked to provide the item ID of the product you wish to purchase. After providing this, you will be asked how many units you would like. If there is sufficient supply, the total cost will be displayed - if not, an error message would be given. On completion, you will be prompted to decide if you want to make another purchase, or disconnect the app.

### Managers

Initialize the manager app through the command "node bamazonManager.js". A list of possible actions will be presented to you:
    * View Products for Sale - the app will list every available item;
    * View Low Inventory - the app will list all items with a count lower than 5;
    * Update Inventory - the app will prompt you to provide the item ID of a product being restocked, then to provide the new total number of units;
    * Add New Product - the app will prompt you to provide the name of the new item being added to the inventory, along with all values required by the schema;
On completion, you will be prompted to decide if you want to run another action, or disconnect the app.

4. Include screenshots, gifs or videos of the app functioning

![Customer App Command Line](https://raw.githubusercontent.com/jkabigting93/bamazon-app/master/images/customer.PNG)
![Database before purchase](https://raw.githubusercontent.com/jkabigting93/bamazon-app/master/images/customerDbBefore.PNG)
![Database after purchase](https://raw.githubusercontent.com/jkabigting93/bamazon-app/master/images/customerDbAfter.PNG)
The above screenshots show the customer app at work. Note how the first row of the database goes down by 10, just as input into the command line.


5. Contain a link to a deployed version of the app

N/A - this is a command line app.

6. Clearly list the technologies used in the app

    * node.js
    * MySQL
    * inquirer

7. State your role in the app development

Everything!