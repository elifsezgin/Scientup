# == Schema Information
#
# Table name: organizations
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Organization < ActiveRecord::Base
  validates :user_id, :group_id, presence: true
  validates :user_id, uniqueness: { scope: :group_id }

  belongs_to :group
  belongs_to :user
end
