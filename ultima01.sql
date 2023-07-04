DROP DATABASE IF EXISTS prueba;
CREATE DATABASE prueba;

USE prueba;
CREATE TABLE consul
(
	ID int auto_increment,
    NOMBRES_APELLIDOS varchar(80),
    EMAIL varchar(80),
    MSG varchar(500),
    PASSWORD varchar(30),
    PRIMARY KEY(ID)
);

INSERT INTO consul
(NOMBRES_APELLIDOS, EMAIL, MSG, PASSWORD)
values 
('Lizbet Iris Arias Tinco' ,'lizbet.arias@outlook.com','Deseo saber cuando con las incripciones del plantes para primaria','soyliz'), 
('Andrea Luciana Aguirre Meneses' ,'andrea.meneses@outlook.com','Deseo saber las vacantes de la I.E.P','soyandrea');

SELECT * FROM consul;