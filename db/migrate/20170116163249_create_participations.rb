class CreateParticipations < ActiveRecord::Migration
  def change
    create_table :participations do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps null: false
    end
    add_index :participations, :user_id
    add_index :participations, :event_id
    add_index :participations, [:user_id, :event_id], unique: true
  end
end
