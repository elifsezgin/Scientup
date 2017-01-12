# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  city_name   :string           not null
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ActiveRecord::Base
  validates :title, :description, :city_name, presence: true
  validates :title, uniqueness: true

end