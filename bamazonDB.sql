-- Initialize bamazon database and select it --
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

-- Crete products table with requested columns --
CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10)
);
