class AddNullToCreator < ActiveRecord::Migration[5.2]
  def change
    change_column_null :recipes, :creator, :false
  end
end
