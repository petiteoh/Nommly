# == Schema Information
#
# Table name: courses
#
#  id         :bigint           not null, primary key
#  course     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Course < ApplicationRecord
    validates :course, presence: true, uniqueness: true

    has_many :courses
end
