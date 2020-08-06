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
require 'test_helper'

class UserPreferenceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
