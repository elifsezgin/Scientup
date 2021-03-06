# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  date        :date             not null
#  time        :time             not null
#  lat         :float            not null
#  lng         :float            not null
#  address     :string           not null
#  group_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ActiveRecord::Base
  validates :name, :description, :date, :time, :group, presence: true

  belongs_to :group
  has_many :participations
  has_one :event_hosting

  has_many :participants, through: :participations, source: :user
  has_one :host, through: :event_hosting, source: :host
end
