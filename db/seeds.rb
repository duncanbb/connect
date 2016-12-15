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
user2 = User.create!(username: "TrumpTower", password: "nonsense")
user3 = User.create!(username: "TheEnd", password: "another_password")
user3 = User.create!(username: "test", password: "password")

story1 = Story.create!(title: "Cold and Flu season is upon us",
  body: "Protect the women and children. With a mild winter like this,
   flus are historically strong. It is important to eat a diet rich in fruits
   and vegetables during times like these.
   People should also continue to exercise and take vitamin D regularly.", author_id: user1.id)

story2 = Story.create!(title: "New Office is beautiful!",
  body: "Hardwood floors, firetruck red piping, exposed ventilation (not my thing
  but it definitely does it for some people.) Bathroom stalls. Slower elevator. Wait,
  it's mostly much much better.", author_id: user2.id)

story3 = Story.create!(title: "Don't sucuumb to election-induced depression",
  body: "Take vitamin-d and make lists of ways that you can actively protect the environment
    and women's rights. You're finally feeling better even if you're border-line comatose,
    you can do this. Do it again and for longer. Use other words.", author_id: user1.id)

story4 = Story.create!(title: "Full-beard, Full-stack", body: "An appAcademy
  student was overheard saying today. He's pretty sick so it might not be how it
  turns out but it won't be for lack of trying. To hell with that, it's already full stack
  it just needs that other little feature...", author_id: user3.id)

story5 = Story.create!(title: "Seeding is important", body: "Site development might be
  complete. Well not here yet, but without adequate seeding it would be impossible to tell.
  There's a lot of nonsense stories on Medium so I figured I'd spa.. oh, sorry.", author_id: user2.id)

story6 = Story.create!(title: "Why spoil Bad Santa by making a sequel?", body: "It's a perfectly funny
  dark Christmas movie and now they had to go and make a sequel what, eleven years later? There's just
  no way it will actually be funny. Whatever laughs are in the premise were already squeezed out of it.
  Now it's just a chance to see the actors look older. I obviously haven't seen the movie.", author_id:user3.id)
