DROP TABLE programming_languages;

CREATE table programming_languages (
	id SERIAL PRIMARY KEY,
	language VARCHAR(20),
	rating INT
	);
	
INSERT into programming_languages (language, rating)
VALUES ('HTML', 85),
	   ('JS', 99),
	   ('JQuery', 98),
	   ('MySQL', 70),
	   ('MySQL', 70);
	   
SELECT * 
FROM programming_languages
WHERE language = 'MySQL';

DELETE from programming_languages
WHERE id = 5;

INSERT into programming_languages(language, rating)
VALUES ('python', 98),
	('C++', 73),
	('R', 95);
	
UPDATE programming_languages
SET language = 'JavaScript'
WHERE id = 2;

SELECT *
FROM programming_languages;

UPDATE programming_languages
SET rating = 90
WHERE id = 1;

ALTER TABLE programming_languages
ADD COLUMN mastered BOOLEAN DEFAULT true;

UPDATE programming_languages
SET rating = 75
WHERE rating < 75;

SELECT *
FROM programming_languages
ORDER BY rating desc;