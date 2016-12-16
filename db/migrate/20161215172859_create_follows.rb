class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :author_id, null: false
      t.integer :follower_id, null: false
    end
  end
end
