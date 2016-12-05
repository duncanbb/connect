# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## story
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed


## comments
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
commentor_id | integer   | not null, foreign key (references users), indexed
story_id     | string    | not null, foreign key (references story), indexed
body         | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title        | string    | not null

## story_tags
column name | data type | details
------------|-----------|-----------------------
story_id     | integer   | not null, primary key
tag_id    | string    | not null

## tag_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique
tag_id      | integer   | not null, foreign key (references tags), indexed

## story_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique
story_id     | integer   | not null, foreign key (references story), indexed
