json.extract! comment, :id, :body, :story_id, :user_id
json.set! :user do
  json.set! :username, comment.user.username
  json.set! :id, comment.user.id
end
