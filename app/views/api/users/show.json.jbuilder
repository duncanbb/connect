json.partial! "api/users/user", user: @user
json.stories @user.stories do |story|
  json.extract! story, :id, :body, :title
  json.created_at story.created_at
end
