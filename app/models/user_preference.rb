# == Schema Information
#
# Table name: user_preferences
#
#  id              :bigint           not null, primary key
#  preferable_id   :integer
#  preferable_type :string
#  prefered        :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class UserPreference < ApplicationRecord
    belongs_to :preferable, polymorphic: true
end
