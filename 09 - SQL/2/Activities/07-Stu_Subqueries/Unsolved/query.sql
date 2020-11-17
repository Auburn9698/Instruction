--List the names and ID numbers of cities that are in the following list: 'Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes'.
SELECT * from city;

SELECT city_id, city
FROM city
WHERE city IN ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')

--Display the districts in the above list of cities.
--Hint: Use the address and city tables.
SELECT * FROM address;

SELECT district
FROM address
WHERE city_id IN
(
	SELECT city_id
	FROM city
	WHERE city in ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')
);



--Using subqueries, find the first and last names of customers who reside in cities that begin with the letter Q.
--Hint: You will need to use three tables and more than one subquery.

SELECT first_name, last_name
FROM customer
WHERE address_id IN
(
	SELECT address_ID
	FROM address
	WHERE city_id IN
	(
		SELECT city_id
		FROM city
		WHERE city LIKE 'Q%'
		)
);