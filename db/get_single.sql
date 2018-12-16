SELECT m.username, p.title, p.post, p.created_at, p.id FROM posts as p
JOIN member as m ON m.id = p.id
WHERE p.id = $1;