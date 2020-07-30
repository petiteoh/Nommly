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
require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
