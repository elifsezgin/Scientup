class CreateEventHostings < ActiveRecord::Migration
  def change
    create_table :event_hostings do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps null: false
    end
    add_index :event_hostings, :user_id
    add_index :event_hostings, :event_id
    add_index :event_hostings, [:user_id, :event_id]
  end
end
