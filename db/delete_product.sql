DELETE FROM product
WHERE id = $1
RETURNING *;
