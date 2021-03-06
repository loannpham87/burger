-- Drops the burger_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Create the database burger_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  eaten BOOLEAN DEFAULT false, 
  PRIMARY KEY (id)
);
