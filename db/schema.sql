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

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Lion King", 9, 4);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Witch", 4, 8);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Star Wars", 6, 3);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Moonlight", 8, 7);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Dark Knight", 3, 5);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Pan's Labyrinth", 6, 6);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Inside Out", 9, 5);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("There Will Be Blood", 3, 5);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Schindler's List", 6, 7);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Fight Club", 5, 6);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Girl, Interrupted", 6, 7);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Silence of the Lambs", 2, 5);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Saving Private Ryan", 6, 8);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Babadook", 4, 7);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Sixth Sense", 6, 6);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Lighthouse", 4, 6);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Halloween (2018)", 7, 5);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("Hereditary", 5, 7);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("It", 7, 7);

INSERT INTO movies (movie_name, catharsis, trigger_rating)
VALUES ("The Conjuring 2", 6, 4);
