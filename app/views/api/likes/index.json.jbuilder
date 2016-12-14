@likes.each do |like|
  json.set! like.id do
    json.user_id like.user_id
    json.liked_by like.user.username
    json.story_id like.story_id
  end
end
