/* Exercise 1: 
1.SELECT rating,
       COUNT(*) AS total_films
FROM film
GROUP BY rating
ORDER BY rating;
2.SELECT title,
       rating
FROM film
WHERE rating IN ('G', 'PG-13');
2.1. SELECT title,
       length,
       rental_rate,
       rating
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;
3.UPDATE customer
SET first_name = 'John',
    last_name = 'Doe',
    email = 'john.doe@gmail.com'
WHERE customer_id = 1;
4.UPDATE address
SET address = '123 New Street',
    district = 'California',
    postal_code = '90001',
    phone = '555-123456'
WHERE address_id = (
    SELECT address_id
    FROM customer
    WHERE customer_id = 1
);

Exercise 2:
1.UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name IN ('Lea', 'Marc')
  AND last_name = 'Benichou';
2.UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David'
  AND last_name = 'Grez';

Delete:
DELETE FROM students
WHERE first_name = 'Lea'
  AND last_name = 'Benichou';

  Count:
1.SELECT COUNT(*) AS total_students
FROM students;
2.SELECT COUNT(*) AS students_after_2000
FROM students
WHERE birth_date > '2000-01-01';

Insert / Alter:
1.ALTER TABLE students
ADD COLUMN math_grade INTEGER;
2.UPDATE students
SET math_grade = 80
WHERE id = 1;
3.UPDATE students
SET math_grade = 90
WHERE id IN (2, 4);
4.UPDATE students
SET math_grade = 40
WHERE id = 6;
5.SELECT COUNT(*) AS students_above_83
FROM students
WHERE math_grade > 83;
6.INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '2001-05-15', 70);
7.SELECT first_name,
       last_name,
       COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name
ORDER BY first_name;

SUM:
SELECT SUM(math_grade) AS total_grades_sum
FROM students;

Exercise 3 :
    Part I:
    1.CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    item_id INTEGER REFERENCES items(id),
    quantity_purchased INTEGER
);
    2.INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers
     WHERE first_name = 'Scott'
       AND last_name = 'Scott'),

    (SELECT id FROM items
     WHERE name = 'Fan'),

    1
);
    PART II:
    1.SELECT *
    FROM purchases;
    2.SELECT purchases.id,
       customers.first_name,
       customers.last_name,
       purchases.item_id,
       purchases.quantity_purchased
FROM purchases
JOIN customers
ON purchases.customer_id = customers.id;
    3.SELECT *
FROM purchases
WHERE customer_id = 5;
    4.SELECT purchases.*,
       items.name
FROM purchases
JOIN items
ON purchases.item_id = items.id
WHERE items.name IN ('Large Desk', 'Small Desk');
   

Yes, if item_id was not defined as NOT NULL.
*/