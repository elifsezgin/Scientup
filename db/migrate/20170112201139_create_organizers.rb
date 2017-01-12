class CreateOrganizers < ActiveRecord::Migration
  def change
    create_table :organizers do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
    add_index :organizers, :user_id
    add_index :organizers, :group_id
    add_index :organizers, [:user_id, :group_id], unique: true
  end
end
