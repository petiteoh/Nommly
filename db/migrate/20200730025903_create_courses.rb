class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :course, null: false

      t.timestamps
    end

    add_index :courses, :course, unique: true
  end
end
