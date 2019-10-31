DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS relations;

CREATE TABLE person (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  nickname VARCHAR(250) ,
  gender VARCHAR(250),
  stories VARCHAR,

);


CREATE TABLE relations(
id INT AUTO_INCREMENT PRIMARY KEY,
relationship VARCHAR(250),
person1 INT,
person2 INT,
foreign key (person1) references person(id),
foreign key (person2) references person(id),

);

INSERT INTO person (name, nickname, gender, stories) VALUES
  ('Prasanna', 'rasaculla', 'Male','{ "Nallavaru vallavaru"}'),
  ('Kalyani', '', 'Female',''),
  ('Selvaraj', '', 'Male','');

INSERT INTO relations (person1,relationship,person2)
VALUES (2,'PARENT',1),(3,'PARENT',1);
