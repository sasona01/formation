/*
1.SELECT first_name,
       last_name
FROM customers
ORDER BY first_name ASC
LIMIT 2 OFFSET (
    SELECT COUNT(*) - 2
    FROM customers
);
2.DELETE FROM purchases
WHERE customer_id = (
    SELECT id
    FROM customers
    WHERE first_name = 'Scott'
      AND last_name = 'Scott'
);
3.SELECT *
FROM customers
WHERE first_name = 'Scott'
  AND last_name = 'Scott';
Yes, Scott still exists in the customers table.
  Because we deleted only his purchases from the purchases table, not the customer record itself
4.SELECT purchases.id,
       customers.first_name,
       customers.last_name,
       purchases.item_id,
       purchases.quantity_purchased
FROM purchases
LEFT JOIN customers
ON purchases.customer_id = customers.id;
5.SELECT purchases.id,
       customers.first_name,
       customers.last_name,
       purchases.item_id,
       purchases.quantity_purchased
FROM purchases
INNER JOIN customers
ON purchases.customer_id = customers.id;
*/