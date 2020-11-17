-- Find how many people rented BLANKET BEVERLY


SELECT COUNT(*)
FROM customer
WHERE customer_id IN
(
	SELECT customer_id
	FROM rental
	WHERE inventory_ID IN
	(
		SELECT inventory_id
		FROM inventory
		WHERE film_ID IN
		(
			SELECT film_id
			FROM film
			WHERE title = 'BLANKET BEVERLY'
		)
	)
);


SELECT first_name, last_name
FROM actor
WHERE actor_id IN
(
  SELECT actor_id
  FROM film_actor
  WHERE film_id IN
  (
    SELECT film_id
    FROM film
    WHERE title = 'ALTER VICTORY'
  )
);




SELECT first_name, last_name
FROM actor
WHERE actor_id IN
(
	SELECT actor_id
	FROM film_actor
	WHERE film_id IN
	(
		SELECT film_id
		FROM film
		WHERE title = 'ALTER VICTORY'
	)
);
	
SELECT title
FROM film
WHERE film_id
IN (
	SELECT film_id
	FROM inventory
	WHERE inventory_id 
	IN (	
		SELECT inventory_id
		FROM rental
		WHERE staff_id 
		IN (		
			SELECT staff_id
			FROM staff
			WHERE last_name = 'Stephens' AND first_name = 'Jon'
			)
		)
);




SELECT title
FROM film
WHERE film_id
IN (
  	SELECT film_id
    FROM inventory
    WHERE inventory_id
    IN (
        SELECT inventory_id
        FROM rental
        WHERE staff_id
        IN (
              SELECT staff_id
              FROM staff
              WHERE last_name = 'Stephens' AND first_name = 'Jon'
            )
        )
  );
