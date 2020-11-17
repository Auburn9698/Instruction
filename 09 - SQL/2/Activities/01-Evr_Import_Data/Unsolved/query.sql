-- Select the average length of movies by rental rate
SELECT rental_rate, AVG(length) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length";

-- Round the results to use only two decimal places
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length";

-- Order by descending values
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" DESC;

-- Limit results to 5
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" DESC
LIMIT 5;

SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" ASC
LIMIT 5;

SELECT rating, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rating
ORDER BY "avg length" ASC
LIMIT 5;


SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" DESC
LIMIT 5;



SELECT first_name, COUNT(first_name) AS "Actor Count"
FROM actor
GROUP BY first_name
ORDER BY "Actor Count" DESC;


-- Select count of actors first names in descending order
SELECT first_name, COUNT(first_name) AS "actor count"
FROM actor
GROUP BY first_name
ORDER BY "actor count" DESC;

-- Select the average duration of movies by rating
SELECT rating, ROUND(AVG(rental_duration), 2) AS "Average Duration"
from film
Group by rating
Order by "Average Duration";



SELECT rating, ROUND(AVG(rental_duration),2) AS "avg duration"
FROM film
GROUP BY rating
ORDER BY "avg duration";

-- Select top ten replace costs for the length of the movie
SELECT length, ROUND(AVG(replacement_cost)) AS "avg cost"
FROM film
GROUP BY length
ORDER BY "avg cost" DESC
LIMIT 10;

-- Select the count of how many times a country appeared, (or the number of
-- records per country.)
SELECT country.country, COUNT(country.country) AS "country count"
FROM city
JOIN country ON city.country_id = country.country_id
GROUP BY country.country
ORDER BY "country count" DESC;

select * from country

select distinct country_id, country from country

SELECT title, film_id
FROM film
WHERE title = 'EARLY HOME';

SELECT * from inventory
WHERE film_id = 268;

SELECT i.inventory_id, i.film_id, i.store_id
FROM inventory i
JOIN film f
ON (i.film_id = f.film_id)
WHERE f.title = 'EARLY HOME';



-- Use Subquery to get the film_id from the query finding EARLY HOME
SELECT *
FROM inventory
WHERE film_id IN
(
  SELECT film_id
  FROM film
  WHERE title = 'EARLY HOME'
);

-- Check to more sure the subquery returned correct value
SELECT *
FROM inventory
WHERE film_id IN (268);



