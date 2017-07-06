CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL(10,2) NULL,
	stock_quantity INT NULL,
	PRIMARY KEY (item_id)
	);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("beach ball", "outdoors", 9.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("standing lamp", "home decor", 25.00, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4K flat screen TV", "electronics", 2500.00, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("calculator", "office", 18.99, 87);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vitamins", "health", 14.25, 101);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hairspray", "beauty", 7.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("almond butter", "grocery", 8.01, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yoga mat", "sports", 12.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper towels", "cleaning products", 5.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog bed", "pets", 30.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("portable speaker", "electronics", 20.00, 17);