class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
    add_index :memberships, :user_id
    add_index :memberships, :group_id
    add_index :memberships, [:user_id, :group_id], unique: true
  end
end
