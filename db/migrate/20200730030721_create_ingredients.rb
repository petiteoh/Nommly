class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :ingredient, null: false

      t.timestamps
    end

    add_index :ingredients, :ingredient, unique: true
  end
end
