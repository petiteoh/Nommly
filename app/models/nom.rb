# == Schema Information
#
# Table name: noms
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  recipe_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Nom < ApplicationRecord
    validates :user_id, :recipe_id, presence: true
    validates :user_id, uniqueness: {scope: :recipe_id}

    belongs_to :user
    belongs_to :recipe
end
