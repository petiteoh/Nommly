class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :calories
      t.time :total_time
      t.text :directions
      t.integer :cuisine_id, null: false
      t.integer :course_id, null: false

      t.timestamps 
    end

    add_index :recipes, :cuisine_id
    add_index :recipes, :course_id
  end
end
