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

  has_many :organizations
  has_many :memberships
  has_many :events

  has_many :organizers, through: :organizations, source: :user
  has_many :members, through: :memberships, source: :user

  def has_member?(member)
    self.members.include(member)
  end

  def has_organizer?(user)
    self.organizers.include(user)
  end


end
