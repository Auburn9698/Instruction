CREATE TABLE doctors (
  id INT PRIMARY KEY NOT NULL,
  speciality TEXT,
  taking_patients BOOLEAN
);

CREATE TABLE patients (
  id INT NOT NULL,
  doctor_id INT NOT NULL,
  health_status TEXT,
  PRIMARY KEY (id, doctor_id),
  FOREIGN KEY (doctor_id) REFERENCES doctors (id)
);

INSERT INTO doctors(id, speciality, taking_patients)
VALUES
(1, 'cardiology', TRUE),
(2, 'orthopedics', FALSE),
(3, 'pediatrics', TRUE);

INSERT INTO patients (id, doctor_id, health_status)
VALUES
(1, 2, 'healthy'),
(2, 3, 'sick'),
(3, 2, 'sick'),
(4, 1, 'healthy'),
(5, 1, 'sick');

SELECT * from doctors;

SELECT * from patients;

INSERT INTO patients(id, doctor_id, health_status)
VALUES
(6, 22, 'sick');

INSERT INTO patients(id, doctor_id, health_status)
VALUES
(6, 1, 'sick');

UPDATE doctors
SET taking_patients = FALSE
WHERE id = 1;

UPDATE patients
SET health_status = 'healthy'
WHERE id = 1;


-- Create Active User Table
CREATE TABLE active_user (
  id INT PRIMARY KEY NOT NULL,
  first_name TEXT,
  last_name TEXT,
  username TEXT
);
CREATE TABLE billing_info (
  billing_id INT PRIMARY KEY NOT NULL,
  street_address TEXT,
  state TEXT,
  username TEXT
);
CREATE TABLE payment_info (
  billing_id INT PRIMARY KEY NOT NULL,
  cc_encrypted TEXT
);

SELECT * from active_user;


CREATE TABLE employee_personal_info (
	employee_id INT PRIMARY KEY NOT NULL,
	email TEXT,
	gender TEXT,
	hire_date TEXT,
	dob TEXT
);
CREATE TABLE employee_password (
	employee_id INT PRIMARY KEY NOT NULL,
	password TEXT
);
SELECT * from employee_personal_info;

INSERT into employee_personal_info
(employee_id, email, gender, hire_date, dob)
VALUES (68, 'blah@gmail.com', 'male', '2020-01-01', '2021-01-01')