# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :bigint           not null, primary key
#  recipe_id     :integer          not null
#  ingredient_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class RecipeIngredient < ApplicationRecord
    validates :recipe_id, :ingredient_id, presence: true
    validates :recipe_id, uniqueness: {scope: :ingredient_id}
    
    belongs_to :recipe
    belongs_to :ingredient
end
