DROP DATABASE IF EXISTS `movies_db`;
CREATE DATABASE `movies_db`;

USE movies_db;

CREATE TABLE movies (
  id int AUTO_INCREMENT NOT NULL,
  movie_name varchar(255) NOT NULL,
  catharsis int NOT NULL,
  trigger_rating int NOT NULL,
  PRIMARY KEY(id)
);

