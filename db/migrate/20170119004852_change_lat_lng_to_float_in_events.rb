class ChangeLatLngToFloatInEvents < ActiveRecord::Migration
  def change
    drop_table :events
    create_table :events do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
    add_index :events, :group_id
  end
end
