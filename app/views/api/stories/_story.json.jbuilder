json.extract! story, :id, :title, :body, :author_id
json.set! :author do
  json.set! :username, story.author.username
end