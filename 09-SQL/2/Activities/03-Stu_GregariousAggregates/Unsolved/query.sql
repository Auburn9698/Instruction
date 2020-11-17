-- 1. What is the average cost to rent a film in the stores?
SELECT AVG(rental_rate) AS "Average Rental Rate"
FROM film;


SELECT AVG(rental_rate) AS "Average Rental Rate"
FROM film;


-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT rating, ROUND(AVG(rental_rate),2) AS "Average Rental Rate"
FROM film
GROUP BY rating;


-- 3. How much would it cost to replace all the films in the database?
SELECT SUM(replacement_cost) AS "Total Replacement Cost"
FROM film;


-- 4. How much would it cost to replace all the films in each ratings category?

SELECT rating, SUM(replacement_cost) AS "Total Replacement Cost"
FROM film
GROUP by rating;


-- 5. How long is the longest movie in the database? The shortest?
SELECT * FROM film;
--length

SELECT MAX(length) as "Longest Movie"
FROM film;
