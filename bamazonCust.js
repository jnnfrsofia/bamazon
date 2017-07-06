//variables that require needed npms
const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require('cli-table2');

//setting up variable for database connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_db'

});

//starting the connection
connection.connect(function(err) {
    if (err) throw err;
    // console.log("connection working")
    //start the bamazon app
    showInventory();

});

//function that will display the current bamazon inventory
function showInventory() {
    //pulling the info from the products table in the bamazon_db database
    connection.query('SELECT * FROM products', function(err, inventory) {
        if (err) throw err;
        //calling the printTable function to display current inventory
        printTable(inventory);
        //calling the prompt user function to ask the customer what they'd like to buy after inventory table has 
        //been displayed
        promptUser();

    });

}

//function that uses the cli-table 2 npm to create an easy to read table
function printTable(res) {
    //sets up the new table variable
    const table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price', 'Current Inventory'],
        colWidths: [10, 35, 30, 10, 20]
    });
    //for loop that pushes the data from the product table rows into the new table created
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    //logs the table to the terminal
    console.log(table.toString());
}

//this function asks the user what item they'd like to buy and how many items they would like to buy after the user has 
//seen the inventory table from the showInventory function
function promptUser() {
    inquirer
        .prompt([{
            name: "id",
            type: "input",
            message: "What is the id of the item you'd like to buy?"
        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }]).then(function(answer) {
            //variables for the users quantity and item id they are buying --> 
            const quantity = answer.quantity
            const id = answer.id

            //querying the bamazon_db database for the item_id the user entered    
            connection.query('SELECT * FROM products WHERE item_id=' + id, function(err, selectedItem) {
                if (err) throw err;
                //check to see if Bamazon has enough stock of the requested item id before continuing
                if (selectedItem[0].stock_quantity - quantity >= 0) {
                    //if there is enough in stock for the requested item, the user will receive the following messages
                    console.log("Bamazon has enough in stock of " + (selectedItem[0].product_name) + "(s)" + "!");
                    console.log("You will be charged $" + (quantity * selectedItem[0].price) + ". Thank you for shopping with Bamazon.");
                    //updating the bamazon_db stock quantities
                    connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantity, id],
                        function(err, inventory) {
                            if (err) throw err;
                            // runs the showInventory function again so the user can see updated inventory and continue shopping
                            showInventory();
                        });
                }


                //if there is not enough in stock, the user will be told to order less of the item and the showInventory function
                //will start again
                else {
                    console.log("Insufficient quantity. Bamazon currently only has " + selectedItem[0].stock_quantity + " " + selectedItem[0].product_name + "(s)" + " in stock at this moment. Please order less.");
                    showInventory();
                }

            });

        });



}
