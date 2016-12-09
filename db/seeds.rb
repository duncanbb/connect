# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
User.destroy_all
Story.destroy_all

user1 = User.create!(username: "test", password: "password")
user2 = User.create!(username: "faker", password: "nonsense")
user3 = User.create!(username: "username", password: "another_password")

story1 = Story.create!(title: "Cold and Flu season is upon us",
  body: "Protect the women and children. With a mild winter like this,
   flus are historically strong.", author_id: user1.id)

story2 = Story.create!(title: "Holiday Shopping begins in earnest",
  body: "Don't wait until the last minute to find the perfect gift. Better
    to beat the last-minute rush.", author_id: user2.id)

story3 = Story.create!(title: "Don't sucuumb to election-induced depression",
  body: "Take vitamin-d and make lists of ways that you can actively protect the environment
    and women's rights.", author_id: user1.id)
