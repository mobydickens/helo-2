SELECT m.username, p.title, p.post, p.created_at FROM posts as P
JOIN member as m ON m.id = p.member_id;