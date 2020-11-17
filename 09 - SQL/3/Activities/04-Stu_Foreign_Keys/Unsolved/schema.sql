-- 1. Create a Customer table
CREATE table customer(
	id SERIAL,
	first_name varchar(20),
	last_name varchar(20),
	PRIMARY KEY(id)	
);

-- 2. Populate that table
-- 'Bob Smith', 'Jane Davidson', 'Jimmy Bell', and 'Stephanie Duke'
INSERT INTO customer (first_name, last_name)
VALUES
	('Bob', 'Smith'),
	('Jane', 'Davidson'),
	('Jimmy', 'Bell'),
	('Stephanie', 'Duke');

-- 3. View Table
SELECT * from customer;

-- 4.. Create Customer Email table
CREATE TABLE customer_email (
	id SERIAL,
	email VARCHAR(30),
	customer_id INTEGER NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- 5. Populate the second table
-- 'bobsmith@email.com', 'jdavids@email.com', 'jimmyb@email.com', 'sd@email.com'
INSERT INTO customer_email(customer_id, email)
VALUES 
	(1, 'bobsmith@email.com'),
	(2, 'jdavids@email.com'),
	(3, 'jimmyb@email.com'),
	(4, 'sd@email.com');

-- 6. View Table
SELECT * from customer_email;

-- 7. Creater Customer Phone Number table
CREATE TABLE customer_phone(
	id SERIAL,
	phone VARCHAR(30) NOT NULL,
	customer_id INTEGER NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(customer_id) REFERENCES customer(id)
);

-- 8. Populate Third Table
-- '435-344-2245', '332-776-4678', '221-634-7753', '445-663-5799'
INSERT INTO customer_phone(customer_id, phone)
VALUES
	(1, '435-344-2245'),
	(2, '332-776-4678'),
	(3, '221-634-7753'),
	(4, '445-663-5799');

-- 9. View Table
SELECT * from customer_phone;

-- Uncomment the following to demonstrate the error of inserting a value with no foreign key
-- INSERT INTO customer_phone(customer_id, phone)
-- VALUES
  -- (10, '555-444-3333');

-- Join Tables
SELECT customer.first_name, customer.last_name, email.email, phone.phone
FROM customer
JOIN customer_email as email
ON customer.id = email.customer_id
JOIN customer_phone as phone
ON customer.id = phone.customer_id;