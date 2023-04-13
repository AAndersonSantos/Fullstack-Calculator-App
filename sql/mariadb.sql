/*1 - Criar base de dados */
CREATE DATABASE `calculator-database`

/*2- Entrar na base de dados que foi criada*/
USE `calculator-database`;

/*3- Criar tabela*/
DROP TABLE IF EXISTS `calculator-tb`;

CREATE TABLE `calculator-tb` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COLLATE 'latin1_swedish_ci',
	`nome` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`calculo` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`resultado` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`data` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP() COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
;

/*4- Vizualizar tabela criada*/
SELECT * FROM `calculator-tb`;

