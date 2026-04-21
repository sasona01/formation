/*
1.CREATE DATABASE bootcamp;
2.CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    birth_date DATE
);


Insert:
1.INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

2.INSERT INTO students (first_name, last_name, birth_date)
VALUES ('TonPrenom', 'TonNom', '2000-01-01');

Select:
1.SELECT * FROM students;
2.SELECT first_name, last_name FROM students;
3.1.SELECT first_name, last_name
FROM students
WHERE id = 2;
3.2.SELECT first_name, last_name
FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc';
3.3.SELECT first_name, last_name
FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';
3.4.SELECT first_name, last_name
FROM students
WHERE first_name LIKE '%a%';
3.5.SELECT first_name, last_name
FROM students
WHERE first_name LIKE 'a%';
3.6.SELECT first_name, last_name
FROM students
WHERE first_n LIKE '%a';
3.7.SELECT first_name, last_name
FROM students
WHERE first_name LIKE '%a_';
3.8.SELECT first_name, last_name
FROM students
WHERE id IN (1, 3);

4.SELECT *
FROM students
WHERE birth_date >= '2000-01-01';
