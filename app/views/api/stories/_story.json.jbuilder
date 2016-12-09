json.extract! story, :id, :title, :body
json.set! :author do
  json.set! :username, story.author.username
end
