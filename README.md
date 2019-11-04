# bamazon-app

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

This node.js app is an Amazon-like storefront that stores its data on a MySQL database. The app will take in orders from customers and deplete stock from the store's inventory. Additionally, department managers have access to a separate app that can view and update the database as needed.

2. Give a high-level overview of how the app is organized

This app contains some dummy data on a store inventory. On startup, customers are given a list of store inventory, prompted to pick an item, and asked how much of the product they want. On Manager startup, they are given four actions that they can perform. On completion, both customers and managers are given the option to perform another action, or to disconnect the app.

3. Give start-to-finish instructions on how to run the app

Firstly, ensure that the MySQL database is set up by running the schema file on MySQL workbench. Next, run an npm install on the root folder. Then, initialize the app in the command line.

4. Include screenshots, gifs or videos of the app functioning



5. Contain a link to a deployed version of the app

N/A - this is a command line app.

6. Clearly list the technologies used in the app

    * node.js
    * MySQL
    * inquirer

7. State your role in the app development

Everything!