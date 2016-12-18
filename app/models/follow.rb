# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  follower_id :integer          not null
#

class Follow < ApplicationRecord
  validates :author_id, :follower_id, presence: true
  validates :author_id, uniqueness: { scope: :follower_id }


  belongs_to :follower,
    class_name: "User",
    primary_key: :id,
    foreign_key: :follower_id

 belongs_to :author,
   class_name: 'User',
   primary_key: :id,
   foreign_key: :author_id
end
