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
require 'test_helper'

class NomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
