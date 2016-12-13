json.set! :body, @comment.body
json.set! :id, @comment.id
json.set! :story_id, @comment.story_id
json.set! :user_id, @comment.user_id



json.set! :user do
  json.set! :id, @comment.user.id
  json.set! :username, @comment.user.username
end
