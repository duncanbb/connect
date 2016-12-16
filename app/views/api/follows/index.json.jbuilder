@follows.each do |follow|
  json.set! follow.id do
    json.id follow.id
    json.follower_id follow.follower_id
    json.author_id follow.author_id
  end
end
