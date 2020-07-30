# == Schema Information
#
# Table name: recipes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  calories    :integer
#  total_time  :time
#  directions  :text
#  cuisine_id  :integer          not null
#  course_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  creator     :string
#
class Recipe < ApplicationRecord
    validates :title, :description, :cuisine_id, :course_id, :creator, presence: true

    belongs_to :cuisine
    belongs_to :course
    has_many :recipe_ingredients
    has_many :ingredients,
        through: :recipe_ingredients,
        source: :ingredient
end
