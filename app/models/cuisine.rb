# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  cuisine    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cuisine < ApplicationRecord
    validates :cuisine, presence: true, uniqueness: true

    has_many :recipes

    has_many :user_preferences, as: :preferable


end
