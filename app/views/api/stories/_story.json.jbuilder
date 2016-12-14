json.extract! story, :id, :title, :body, :author_id
json.likes story.likes
json.set! :author do
  json.set! :username, story.author.username
  json.set! :id, story.author.id
  json.set! :created_at, story.created_at
end
