class CreateOrganization < ActiveRecord::Migration
  def change
    drop_table :organizers
    create_table :organizations do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
    add_index :organizations, :user_id
    add_index :organizations, :group_id
    add_index :organizations, [:user_id, :group_id], unique: true
  end

end
