DROP TABLE IF EXISTS firepower;

-- Create new table to import data
CREATE TABLE firepower (
	country VARCHAR,
	ISO3 VARCHAR,
	rank INT,
	TotalPopulation INT,
	ManpowerAvailable INT,
	TotalMilitaryPersonnel INT,
	ActivePersonnel INT,
	ReservePersonnel INT,
	TotalAircraftStrength INT,
	FighterAircraft INT,
	AttackAircraft INT,
	TotalHelicopterStrength INT,
	AttackHelicopters INT
);

-- Import data from GlobalFirePower.csv
-- View the table to ensure all data has been imported correctly
SELECT * FROM firepower;

ALTER TABLE firepower
ADD COLUMN id SERIAL PRIMARY KEY;

SELECT * 
FROM firepower
WHERE reservepersonnel = 0; 

DELETE FROM firepower
WHERE reservepersonnel = 0; 

SELECT * 
FROM firepower
WHERE fighteraircraft = 1; 

-- Sri Lanka

UPDATE firepower
SET fighteraircraft = 1
WHERE fighteraircraft = 0; 

UPDATE firepower
SET totalaircraftstrength = totalaircraftstrength + 1
WHERE fighteraircraft = 1 and country != 'Sri Lanka'; 

SELECT AVG(totalmilitarypersonnel) as AvgTotalMilitaryPersonnel,
	AVG(totalaircraftstrength) AS AvgTotalAircraftStrength,
	AVG(totalhelicopterstrength) AS AvgTotalHelicopterStrength,
	AVG(totalpopulation) as AvgTotalPopulation
FROM firepower;

INSERT INTO firepower(country, totalpopulation, totalmilitarypersonnel, totalaircraftstrength, totalhelicopterstrength)
VALUES ('GlobalLand', 60069024, 524358, 457, 183);

SELECT * FROM firepower;

