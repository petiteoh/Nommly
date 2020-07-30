class AddCreatorColumnToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :creator, :string
    change_column_null :recipes, :creator, :false
  end
end
