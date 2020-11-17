-- Select the average length of movies by rental rate, and order by average length:
SELECT rental_rate, AVG(length) AS "Average Length"
FROM film
GROUP BY rental_rate
Order By "Average Length"

SELECT rental_rate, AVG(length) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length";

-- Round the results to use only two decimal places
SELECT rental_rate, ROUND(AVG(length), 2) AS "Average Length"
FROM film
GROUP BY rental_rate
ORDER BY "Average Length";


-- Order by descending values
SELECT rental_rate, ROUND(AVG(length), 2) AS "Average Length"
FROM film
GROUP BY rental_rate
ORDER BY "Average Length" DESC;


-- Limit results to 5
SELECT rental_rate, ROUND(AVG(length),2) AS "avg length"
FROM film
GROUP BY rental_rate
ORDER BY "avg length" DESC
LIMIT 5;
