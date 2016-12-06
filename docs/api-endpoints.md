# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/stories`
  - Posts index/search
  - accepts `topic_name` query param to list notes by tag (if I get to it)
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- `GET  /api/comments`
- `POST /api/stories/:id/comments`
- `GET  /api/stories/:id/comments`
- `DELETE /api/stories/:id/comments/:id`
  - index of all comments for a story
  - alerts author of comments (if I get there)

### Topics(Bonus Feature)

- A story's topics will be included in the story show template
- `GET /api/topics`
  - includes query param for typeahead suggestions
- `POST /api/posts/:post_id/topics`: add topic to post by name
- `DELETE /api/posts/:post_id/topics/:topic_name`: remove tag from note by
  name
