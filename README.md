# Bamazon

## Overview

Bamazon is an interactive shopping node app that uses MySQL and Node.JS. I also used the CLI-Table 2 NPM to display the table in an easy to read fashion for the customer. 

In this application, customers are allowed to purchase items.

###Installation Steps

1. First install the MYSQL, Inquirer, and CLI-Table1 NPMs.
2. Git clone this repository onto your computer.
3. Run 'node bamazonCust.js' in the CLI.
4. Now you are ready to shop!


### Shopping Guide

Once you've entered, 'node bamazonCust.js' in the CLI, the inventory table will display and you will be prompted for an item id.

![Screenshot](./images/screenshot1.jpg)

After you've entered the item id, you will be asked how many of this item you would like to purchase.

![Screenshot](./images/screenshot2.jpg)

If there is enough of this item in stock, you will be given your total amount due, and the inventory table with updated stock quantities will be displayed. The prompt will start again.

![Screenshot](./images/screenshot3.jpg)

If you enter a quantity of an item higher than Bamazon has in stock, the app will alert you of the insufficient quantity, and the app will restart.

![Screenshot](./images/screenshot4.jpg)




