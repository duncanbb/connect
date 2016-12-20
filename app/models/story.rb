# == Schema Information
#
# Table name: stories
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :text             not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Story < ApplicationRecord
  validates :author_id, uniqueness: { scope: :title }
  validates :author_id, presence: true
  validates :body, presence: true
  validates :title, presence: true

  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/,
    allow_nil: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many :comments
  has_many :likes

end
