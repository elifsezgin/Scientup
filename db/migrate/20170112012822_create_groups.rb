class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :city_name, null: false
      t.string :image_url

      t.timestamps null: false
    end
    add_index :groups, :title, unique: true
  end
end
