--In this activity, you will use ORDER BY in combination with other SQL methods to query and order the tables.

--Determine the count of actor first names ordered in descending order.
SELECT first_name, COUNT(first_name) AS "Actor Count"
FROM actor
GROUP BY first_name
ORDER BY "Actor Count" DESC;



--Determine the average rental duration for each rating rounded to two decimals. Order these in ascending order.
SELECT rating, ROUND(AVG(rental_duration), 2) AS "Average Duration"
FROM film
GROUP BY rating
ORDER BY "Average Duration" ASC;


--Determine the top 10 average replace costs for movies by their length.
SELECT length, ROUND(AVG(replacement_cost),2) AS "Average Replacement Cost"
FROM film
GROUP BY length
ORDER BY "Average Replacement Cost" DESC
LIMIT 10;






--Bonus, using the city and country tables:
-- determine the count of cities by country in descending order / Count number of records per country.

SELECT * from city;

SELECT country.country, COUNT (country.country) AS "Country Count"
FROM city
JOIN country ON city.country_id = country.country_id
GROUP by country.country
ORDER BY "Country Count" DESC;

SELECT distinct country_id, country
FROM country;





SELECT * from country;

SELECT country.country, COUNT(country.country) AS "country count"
FROM city
JOIN country ON city.country_id = country.country_id
GROUP BY country.country
ORDER BY "country count" DESC;

