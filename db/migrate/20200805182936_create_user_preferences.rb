class CreateUserPreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :user_preferences do |t|
      t.integer :user_id
      t.integer :preferable_id
      t.string :preferable_type
      t.boolean :prefered
      t.timestamps
    end

    add_index :user_preferences, [:preferable_id, :preferable_type]
  end
end
