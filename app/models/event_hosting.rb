# == Schema Information
#
# Table name: event_hostings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EventHosting < ActiveRecord::Base
  validates :host, :event, presence: true

  belongs_to :host,
    foreign_key: :user_id,
    class_name: :User
  belongs_to :event
end
