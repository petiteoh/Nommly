# == Schema Information
#
# Table name: ingredients
#
#  id         :bigint           not null, primary key
#  ingredient :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Ingredient < ApplicationRecord
    validates :ingredient, presence: true, uniqueness: true

    has_many :recipe_ingredients
    has_many :recipes,
        through: :recipe_ingredients,
        source: :recipe

    has_many :user_preferences, as: :preferable
end
