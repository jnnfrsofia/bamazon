
//variables that require needed npms
const mysql = require('mysql');
const inquirer = require('inquirer');

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
        console.log("Bamazon's Inventory");
        //for loop that will display the inventory in a table to the user
        for (var i = 0; i < inventory.length; i++) {
            console.log("Item ID: " + inventory[i].item_id + " | Product: " + inventory[i].product_name + " | Department: " + inventory[i].department_name + " | Price: " + inventory[i].price + " | Quantity: " + inventory[i].stock_quantity);
        }
        //calling the promptUser function
        promptUser();

    });

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
                    console.log("Bamazon has enough in stock of " + (selectedItem[0].product_name)+ "!");
                    console.log("You will be charged $" + (quantity * selectedItem[0].price) + ". Thank you for shopping with Bamazon.");
                } 
                //if there is not enough in stock, the user will be told to order less of the item and the showInventory function
                //will start again
                else {
                    console.log("Bamazon currently only has " + selectedItem[0].stock_quantity + " " + selectedItem[0].product_name + " in stock at this moment. Please order less.");
                    showInventory();
                }


                //updating the bamazon_db stock quantities
                connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantity, id],
                    function(err, inventory) {
                        if (err) throw err;
                        // runs the showInventory function again so the user can see updated inventory and continue shopping
                        showInventory();
   

                    });

            });


        });

}


