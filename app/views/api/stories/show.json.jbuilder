json.partial! "api/stories/story", story: @story
json.comments @story.comments do |comment|
  json.extract! comment, :id, :body, :user_id
  json.username comment.user.username
  json.created_at comment.created_at
end
