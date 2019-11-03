-- Initialize bamazon database and select it --
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

-- Create products table with requested columns --
CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10),
  primary key (item_id)
);

-- Added 10 dummy rows --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Guitar", "Musical Instruments", 199.99, 66);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Drum", "Musical Instruments", 450.67, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Karaoke Set", "Musical Instruments", 50.00, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pet Rock", "Toys", 19.99, 101);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tamagotchi", "Toys", 40.00, 51);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Furby", "Toys", 32.50, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Succulent", "Plants", 14.99, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bonzai Tree", "Plants", 99.99, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Venus Fly Trap", "Plants", 8.99, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Strange Glowing Relic", "Unknown", 0.99, 1);

-- Show table in MySQL --
SELECT * FROM products;