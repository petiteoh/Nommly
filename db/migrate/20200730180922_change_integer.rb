class ChangeInteger < ActiveRecord::Migration[5.2]
  def change
    change_column_null :recipes, :creator, false
    remove_column :recipes, :total_time
    add_column :recipes, :total_time, :integer
  end
end
