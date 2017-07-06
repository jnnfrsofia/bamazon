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
VALUES ("Beach Ball", "Outdoors", 9.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Standing Lamp", "Home Decor", 25.00, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4K Flat Screen TV", "Electronics", 2500.00, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calculator", "Office", 18.99, 87);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vitamins", "Health", 14.25, 101);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hairspray", "Beauty", 7.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Almond Butter", "Grocery", 8.01, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Sports", 12.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Cleaning Products", 5.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Bed", "Pets", 30.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable Speaker", "Electronics", 20.00, 17);