DROP TABLE posts;

CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  photo TEXT,
  hash_value TEXT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  member_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  post TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT Now(),
  FOREIGN KEY (member_id) REFERENCES member (id)
);

INSERT INTO member ( username, hash_value ) 
VALUES ('Megan', 'Password');
INSERT INTO member ( username, hash_value ) 
VALUES ('Serene', 'Password');
INSERT INTO member ( username, hash_value ) 
VALUES ('Shannon', 'Password');
SELECT * FROM member;

INSERT INTO posts (member_id, title, post)
VALUES (1, 'My First Post', 'This is a test post');
INSERT INTO posts (member_id, title, post)
VALUES (1, 'My Second Post', 'This is another test post');
INSERT INTO posts (member_id, title, post)
VALUES (2, 'Life Story, a sister tale', 'This is a test post about sisters');
INSERT INTO posts (member_id, title, post)
VALUES (3, 'Oldest is bestist', 'This is a test post');
SELECT * FROM posts;