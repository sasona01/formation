/*Exercise 1*
1.SELECT *
FROM items
ORDER BY price ASC;
2.SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;
3.SELECT first_name, last_name, email
FROM customers
ORDER BY first_name ASC
LIMIT 3;
4.SELECT last_name
FROM customers
ORDER BY last_name DESC;

Exercise 2:
1.SELECT *
FROM customer;
2.SELECT first_name || ' ' || last_name AS full_name
FROM customer;
3.SELECT DISTINCT create_date
FROM customer;
4.SELECT *
FROM customer
ORDER BY first_name DESC;
5.SELECT film_id,
       title,
       description,
       release_year,
       rental_rate
FROM film
ORDER BY rental_rate ASC;
6.SELECT address,
       phone
FROM address
WHERE district = 'Texas';
7.SELECT *
FROM film
WHERE film_id IN (15, 150);
8.SELECT film_id,
       title,
       description,
       length,
       rental_rate
FROM film
WHERE title = '';
9.SELECT film_id,
       title,
       description,
       length,
       rental_rate
FROM film
WHERE title LIKE 'Ti%';
10.SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;
11.SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;
Bonus:
SELECT *
FROM (
    SELECT *,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num
    FROM film
) AS ranked_films
WHERE row_num BETWEEN 11 AND 20;
12.SELECT customer.customer_id,
       customer.first_name,
       customer.last_name,
       payment.amount,
       payment.payment_date
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;
13.SELECT film.title
FROM film
LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.inventory_id IS NULL;
14.SELECT city.city,
       country.country
FROM city
JOIN country
ON city.country_id = country.country_id;
15.SELECT staff.staff_id,
       customer.customer_id,
       customer.first_name,
       customer.last_name,
       payment.amount,
       payment.payment_date
FROM payment
JOIN customer
ON payment.customer_id = customer.customer_id
JOIN staff
ON payment.staff_id = staff.staff_id
ORDER BY staff.staff_id ASC;

/