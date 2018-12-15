INSERT INTO member ( username, hash_value, photo ) 
VALUES ($1, $2, $3)
RETURNING *;