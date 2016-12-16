# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
User.destroy_all
Story.destroy_all
Comment.destroy_all

user1 = User.create!(username: "JonSmith", password: "password!")
user2 = User.create!(username: "BobMcJennings", password: "nonsense")
user3 = User.create!(username: "TheEnd", password: "another_password")
user4 = User.create!(username: "test", password: "password")

follow1 = Follow.create!(author_id: user1.id, follower_id: user4.id)
follow2 = Follow.create!(author_id: user2.id, follower_id: user4.id)
follow3 = Follow.create!(author_id: user3.id, follower_id: user4.id)

story1 = Story.create!(title: "How I traveled for 20 months while still working",
  body: "A lot of people say they're going to quit their jobs and travel. I used
  to be one of those people and then I decided to separate the two. Depending on
  your professsion, the same may be possible for you. By choosing your destination
  and type of food carefully you could even save money by leaving your home as I
  sometimes did during my stay in the Southeast Pacific.", author_id: user1.id, image: File.open("app/assets/images/beach.jpg"))

  comment1_1 = Comment.create!(body: "How did you do this?", user_id: user2.id, story_id: story1.id)
  comment1_2 = Comment.create!(body: "It was easy, didn't you read the post?", user_id: user1.id, story_id: story1.id)
  comment1_3 = Comment.create!(body: "First comment!", user_id: user3.id, story_id: story1.id)

  like1_1 = Like.create(user_id: user1.id, story_id: story1.id)
  like1_2 = Like.create(user_id: user2.id, story_id: story1.id)
  like1_3 = Like.create(user_id: user3.id, story_id: story1.id)

story2 = Story.create!(title: "New Office is beautiful!",
  body: "Hardwood floors, firetruck red piping, exposed ventilation (not my thing
  but it definitely does it for some people.) Bathroom stalls. Slower elevator. Wait,
  it's mostly much much better.", author_id: user2.id, image: File.open("app/assets/images/dark-cityscape.jpg"))

  comment2_1 = Comment.create!(body: "It's even a better train ride for me!", user_id: user3.id, story_id: story2.id)
  comment2_2 = Comment.create!(body: "Not for me but it seems like mostly a trade-up", user_id: user1.id, story_id: story2.id)
  comment2_3 = Comment.create!(body: "Are you kidding me? It's great!", user_id: user2.id, story_id: story2.id)
  comment2_4 = Comment.create!(body: "A working faucet in the bathroom would be nice. But you're right, it's great.", user_id: user1.id, story_id: story2.id)

  like2_1 = Like.create(user_id: user1.id, story_id: story2.id)
  like2_2 = Like.create(user_id: user2.id, story_id: story2.id)
  like2_3 = Like.create(user_id: user3.id, story_id: story2.id)

story3 = Story.create!(title: "Daydreaming to regenerate",
  body: "There always needs to be a rhythm and tradeoff between exertion and relaxation.
  Daydreaming, though often derided, is as restorative as focused meditation, except
  without the expended mental energy and opportunity for self-judgment. It is important
  in your life to find places to ease back from striving. That way you can strive more fully", author_id: user1.id, image: File.open("app/assets/images/cirrus.jpg"))

comment3_1 = Comment.create!(body: "I love the way leaves smell.", user_id: user2.id, story_id: story3.id)
comment3_2 = Comment.create!(body: "AND the dirt!", user_id: user3.id, story_id: story3.id)
comment3_3 = Comment.create!(body: "This is my post but you guys sound a little strange.", user_id: user1.id, story_id: story3.id)

like3_1 = Like.create(user_id: user1.id, story_id: story3.id)
like3_2 = Like.create(user_id: user2.id, story_id: story3.id)
like3_3 = Like.create(user_id: user3.id, story_id: story3.id)

story4 = Story.create!(title: "Learn Full-stack", body: "Actually knowing that you've
  coded your server and frontend is incredibly satisfying even if this is a relatively
  basic app. One of my favorite things about React is seeing an element just suddenly
  appear on a page ( even if by suddenly I mean, after you've written a reducer, action,
  container and object -- it still feels fast and magical) Thanks React and app Academy", author_id: user3.id,
  image: File.open("app/assets/images/cityscape.jpg"))

  comment4_1 = Comment.create!(body: "This project was hard. But fun.", user_id: user1.id, story_id: story4.id)
  comment4_2 = Comment.create!(body: "I made a clone of Facebook!", user_id: user1.id, story_id: story4.id)
  comment4_3 = Comment.create!(body: "I cloned notepad! The styling was almost impossible.", user_id: user2.id, story_id: story4.id)

  like4_1 = Like.create(user_id: user1.id, story_id: story4.id)
  like4_2 = Like.create(user_id: user2.id, story_id: story4.id)

story5 = Story.create!(title: "Seeding is important", body: "Site development might be
  complete. Well not here yet, but without adequate seeding it would be impossible to tell.
  There's a lot of nonsense stories on Medium so I figured I'd spa.. oh, sorry.", author_id: user2.id,
  image: File.open("app/assets/images/cotton-candy-mountain.jpg"))

  comment5_1 = Comment.create!(body: "I seeded for five thousand hours!", user_id: user3.id, story_id: story5.id)
  comment5_2 = Comment.create!(body: "I seeded more. Keep going.", user_id: user1.id, story_id: story5.id)
  comment5_3 = Comment.create!(body: "I seeded one file is that enough?", user_id: user2.id, story_id: story5.id)

  like5_1 = Like.create(user_id: user1.id, story_id: story5.id)
  like5_2 = Like.create(user_id: user2.id, story_id: story5.id)
  like5_3 = Like.create(user_id: user3.id, story_id: story5.id)

story6 = Story.create!(title: "Why spoil Bad Santa by making a sequel?", body: "It's a perfectly funny
  dark Christmas movie and now they had to go and make a sequel what, eleven years later? There's just
  no way it will actually be funny. Whatever laughs are in the premise were already squeezed out of it.
  Now it's just a chance to see the actors look older. I obviously haven't seen the movie.", author_id:user3.id,
  image: File.open("app/assets/images/couple-hike.jpg"))

  comment6_1 = Comment.create!(body: "I loved the new Bad Santa!", user_id: user2.id, story_id: story6.id)
  comment6_2 = Comment.create!(body: "You would.", user_id: user1.id, story_id: story6.id)
  comment6_3 = Comment.create!(body: "Fine, it wasn't amazing but it was okay.", user_id: user2.id, story_id: story6.id)

  like6_3 = Like.create(user_id: user3.id, story_id: story6.id)

story7 = Story.create!(title: "Time in Nature helps us decompress", body: "The medicine of simply being in the forest.
Shinrin-yoku is a term that means 'taking in the forest atmosphere' or 'forest bathing.' It was developed in
Japan during the 1980s and has become a cornerstone of preventive health care and healing in Japanese medicine.
In clinical settings it has been found to reduce heart rate, blood-pressure and cortisol museums. If you can't
get out of the city I love the public garden in the Ford Foundation's building", author_id:user2.id,
  image: File.open("app/assets/images/deer.jpg"))

  comment7_1 = Comment.create!(body: "Plants would make the office even more amazing!", user_id: user1.id, story_id: story7.id)
  comment7_2 = Comment.create!(body: "My favorite plant is a snake plant.", user_id: user3.id, story_id: story7.id)
  comment7_3 = Comment.create!(body: "Plants are alright.", user_id: user2.id, story_id: story7.id)

story8 = Story.create!(title: "Vertigo", body: "Despite the brisk temperature and breeze I was almost overheating.
When I get frightened I usually get cold so I kept telling myself I was excited. It was a rope bridge and easily
the longest and tallest I had ever seen. It vibrated but it was the only thing separating me from a fall to the
beautiful canopy of trees beneath me and the rocks beneath those.", author_id:user2.id,
  image: File.open("app/assets/images/fall-rope-bridge.jpg"))

    comment8_1 = Comment.create!(body: "Wow that is crazy!", user_id: user1.id, story_id: story8.id)
    comment8_2 = Comment.create!(body: "I can't believe you did that.", user_id: user3.id, story_id: story8.id)
    comment8_3 = Comment.create!(body: "Neither can I.", user_id: user2.id, story_id: story8.id)

    like8_1 = Like.create(user_id: user1.id, story_id: story8.id)
    like8_2 = Like.create(user_id: user2.id, story_id: story8.id)
    like8_3 = Like.create(user_id: user3.id, story_id: story8.id)

story9 = Story.create!(title: "The Gold Rush", body: "The discovery of gold nuggets in the Sacramento Valley in early 1848
sparked the Gold Rush, arguably one of the most significant events to shape American history during the first half of the
19th century. As news spread of the discovery, thousands of prospective gold miners traveled by sea or over land to San Francisco
and the surrounding area; by the end of 1849, the non-native population of the California territory was some 100,000 (compared with
 the pre-1848 figure of less than 1,000). A total of $2 billion worth of precious metal was extracted from the area during
 the Gold Rush, which peaked in 1852.", author_id:user1.id,
  image: File.open("app/assets/images/goldrush.jpg"))

  comment9_1 = Comment.create!(body: "What a wild time that must have been!", user_id: user2.id, story_id: story9.id)
  comment9_2 = Comment.create!(body: "Imagine being able to change your life from finding something in a river.", user_id: user3.id, story_id: story9.id)
  comment9_3 = Comment.create!(body: "Might be more exciting to fully-earn it.", user_id: user2.id, story_id: story9.id)

  like9_1 = Like.create(user_id: user1.id, story_id: story9.id)
  like9_2 = Like.create(user_id: user2.id, story_id: story9.id)
  like9_3 = Like.create(user_id: user3.id, story_id: story9.id)

story10 = Story.create!(title: "Horse Racing", body: "Horse racing is an equestrian performance sport, involving two
or more jockeys riding horses over a set distance for competition. It is one of the most ancient of all sports and its basic
premise – to identify which of two or more horses is the fastest over a set course or distance – has remained unchanged since
the earliest times.", author_id:user2.id, image: File.open("app/assets/images/horse-jail.jpg"))

  comment10_1 = Comment.create!(body: "I once won 500 dollars on a horse race!", user_id: user3.id, story_id: story10.id)
  comment10_2 = Comment.create!(body: "Really, where?", user_id: user1.id, story_id: story10.id)
  comment10_3 = Comment.create!(body: "At the aqueduct. Okay, maybe, I lied.", user_id: user3.id, story_id: story10.id)

  like10_1 = Like.create(user_id: user1.id, story_id: story10.id)

story11 = Story.create!(title: "Industrial Design", body: "In the last few years, the field of Industrial Design has gone
through dramatic changes. We have seen the revolution in digital technology, which allowed billions of people around the
globe to connect, communicate, and share information. We have witnessed a wave of mass creativity, which started to erase
the old distinction between consumers, producers, and designers by allowing wider audiences to participate in the creative process.
We have observed the convergence of industrial design with scientific research—from biology and genetics to artificial intelligence
and robotics—allowing things from the realm of science fiction to take shape in real life.", author_id:user3.id,
image: File.open("app/assets/images/industrial.jpg"))

  like11_1 = Like.create(user_id: user1.id, story_id: story11.id)

  comment11_1 = Comment.create!(body: "Pretty pretentious sounding. I mean, we get it -- design is important.", user_id: user2.id, story_id: story11.id)
  comment11_2 = Comment.create!(body: "It is!", user_id: user1.id, story_id: story11.id)
  comment11_3 = Comment.create!(body: "Those are beautiful though.", user_id: user2.id, story_id: story11.id)

story12 = Story.create!(title: "Trip to Japan", body: "Shinji Nohara knows Tokyo like no other. A lifelong local, he’s the
 ‘Tokyo Fixer’, the foodie who fed fugu (puffer fish) to Anthony Bourdain, who consults with some of the world’s best
 restaurants, and who regularly guides the great and the good around Tokyo’s lesser-known highlights. Best of all, he agreed
 to give this Connect writer a taste of the city, Shinji-style.", author_id:user1.id,
image: File.open("app/assets/images/japan.jpg"))

  comment12_1 = Comment.create!(body: "When I finish appAcademy, get a job and work there a long time I want to go to Japan!", user_id: user2.id, story_id: story12.id)
  comment12_2 = Comment.create!(body: "Me too!", user_id: user1.id, story_id: story12.id)
  comment12_3 = Comment.create!(body: "Let's go eat fugu!", user_id: user2.id, story_id: story12.id)

  like12_1 = Like.create(user_id: user1.id, story_id: story12.id)
  like12_2 = Like.create(user_id: user2.id, story_id: story12.id)
  like12_3 = Like.create(user_id: user3.id, story_id: story12.id)

story13 = Story.create!(title: "Lightning", body: "Lightning is a sudden electrostatic discharge that occurs during
an electrical storm. This discharge occurs between electrically charged regions of a cloud (called intra-cloud
lightning or IC), between two clouds (CC lightning), or between a cloud and the ground (CG lightning).", author_id:user2.id,
image: File.open("app/assets/images/purple-lightning.jpg"))

  comment13_1 = Comment.create!(body: "My grandmother was once struck by lightning while washing the dishes.", user_id: user1.id, story_id: story13.id)
  comment13_2 = Comment.create!(body: "Did she survive?", user_id: user3.id, story_id: story13.id)
  comment13_3 = Comment.create!(body: "It really struck the glass in her hand and she got cut but she was fine.", user_id: user1.id, story_id: story13.id)

  like13_1 = Like.create(user_id: user1.id, story_id: story13.id)
  like13_2 = Like.create(user_id: user2.id, story_id: story13.id)
  like13_3 = Like.create(user_id: user3.id, story_id: story13.id)

story14 = Story.create!(title: "Snowdust", body: "Types of snow can be designated by the shape of its flakes,
description of how it is falling, and by how it collects on the ground. A blizzard and snow storm indicate
heavy snowfalls over a large area, snow squalls give heavy snowfalls over narrow bands, while flurries are used
for the lightest snowfall. Types which fall in the form of a ball, rather than a flake, are known as graupel,
with sleet and snow grains as types of graupel. Once on the ground, snow can be categorized as powdery when fluffy,
granular when it begins the cycle of melting and refreezing, and crud or eventually ice once it packs down into
a dense drift after multiple melting and refreezing cycles. When powdering, snow drifts with the wind or ground
blizzard, sometimes to the depth of several metres. After attaching to hillsides, blown snow can evolve into a snow
slab, which is an avalanche hazard on steep slopes.", author_id:user3.id,
image: File.open("app/assets/images/snowdust.jpg"))

  comment14_1 = Comment.create!(body: "It snowed today.", user_id: user1.id, story_id: story14.id)
  comment14_2 = Comment.create!(body: "When do you think it will snow again?", user_id: user3.id, story_id: story14.id)
  comment14_3 = Comment.create!(body: "No one knows.", user_id: user2.id, story_id: story14.id)

story15 = Story.create!(title: "Camping", body: "Camping is an elective outdoor recreational activity involving
overnight stays away from home in a shelter such as a tent, a caravan, or even a motorhome. Generally participants
leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment.
To be regarded as 'camping' a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking,
and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons.", author_id:user1.id,
image: File.open("app/assets/images/star-mountain.jpg"))

  comment15_1 = Comment.create!(body: "I once camped on the shipwreck coast.", user_id: user2.id, story_id: story15.id)
  comment15_2 = Comment.create!(body: "I camped in my backyard", user_id: user3.id, story_id: story15.id)
  comment15_3 = Comment.create!(body: "All camping is cool.", user_id: user2.id, story_id: story15.id)

story16 = Story.create!(title: "Swimming", body: "I'd like to be a good swimmer but I'm not. My girlfriend says I look like I'm
stomping grapes. I just push my feet back instead of fluttering them. I don't know how - when else do you flutter that way? I always
look like I'm swimming really hard and fast but I don't move anywhere really.", author_id:user2.id,
image: File.open("app/assets/images/swim.jpg"))

  comment16_1 = Comment.create!(body: "I'm sure with practice you could become a better swimmer.", user_id: user1.id, story_id: story16.id)
  comment16_2 = Comment.create!(body: "You definitely could.", user_id: user3.id, story_id: story16.id)
  comment16_3 = Comment.create!(body: "But where's the time for it?", user_id: user2.id, story_id: story16.id)

story17 = Story.create!(title: "The Beach", body: "NYC’s best-kept secret and lifeguard-free three-mile stretch of clean sand,
trees and grassy dunes is so isolated that even on a summer weekend you’ll get a good 50 yards of beach to yourself.
Since Fort Tilden Beach is nearly inaccessible via subway or car (unless you have a fancy fishing license), we suggest
biking there. Oh, and don’t forget to pack some grub—the area is pretty sparse in terms of eateries and stores.", author_id:user3.id,
image: File.open("app/assets/images/teal-beach.jpg"))

  comment17_1 = Comment.create!(body: "That is definitely not an NYC Beach.", user_id: user1.id, story_id: story17.id)
  comment17_2 = Comment.create!(body: "Fort Tilden maybe?", user_id: user2.id, story_id: story17.id)
  comment17_3 = Comment.create!(body: "Not even Fort Tilden.", user_id: user1.id, story_id: story17.id)

story18 = Story.create!(title: "The Shire", body: "The Shire is a region of J. R. R. Tolkien's fictional Middle-earth,
described in The Lord of the Rings and other works. The Shire refers to an area settled exclusively by Hobbits and largely
removed from the goings-on in the rest of Middle-earth. It is located in the northwest of the continent, in the large region of
Eriador and the Kingdom of Arnor. In the languages invented by Tolkien, its name in Westron was Sûza 'Shire' or Sûzat 'The Shire',
while its name in Sindarin was i Drann.", author_id:user1.id,
image: File.open("app/assets/images/the-shire.jpg"))

comment18_1 = Comment.create!(body: "What about Hogwarts?", user_id: user2.id, story_id: story18.id)
comment18_2 = Comment.create!(body: "What's Hogwarts?", user_id: user1.id, story_id: story18.id)
comment18_3 = Comment.create!(body: "A school.", user_id: user2.id, story_id: story18.id)

story19 = Story.create!(title: "The Piedmont", body: "The Piedmont is one of the 20 regions of Italy. It has an area of 25,402 square kilometres
 (9,808 sq mi) and a population of about 4.6 million. The capital of Piedmont is Turin.", author_id:user2.id,
image: File.open("app/assets/images/valley.jpg"))

comment19_1 = Comment.create!(body: "Mmmm piedmont.", user_id: user3.id, story_id: story19.id)
comment19_2 = Comment.create!(body: "Maybe after Japan we go there?", user_id: user1.id, story_id: story19.id)
comment19_3 = Comment.create!(body: "Not a bad pick.", user_id: user2.id, story_id: story19.id)

story20 = Story.create!(title: "The Violin", body: "The violin is a wooden string instrument in the violin family. It is the smallest
and highest-pitched instrument in the family in regular use. Smaller violin-type instruments are known, including the violino piccolo
and the kit violin, but these are virtually unused in the 2010s. The violin typically has four strings tuned in perfect fifths, and is
most commonly played by drawing a bow across its strings, though it can also be played by plucking the strings with the fingers (pizzicato).
Violins are important instruments in a wide variety of musical genres. They are most prominent in the Western classical tradition and in many
varieties of folk music.", author_id:user3.id,
image: File.open("app/assets/images/violin.jpg"))

comment20_1 = Comment.create!(body: "I played viola as a kid.", user_id: user2.id, story_id: story20.id)
comment20_2 = Comment.create!(body: "I played recorder.", user_id: user1.id, story_id: story20.id)
comment20_3 = Comment.create!(body: "Start a band?", user_id: user2.id, story_id: story20.id)
