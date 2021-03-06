# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :session_token, uniqueness: true

  attr_reader :password

  has_many :memberships
  has_many :organizations
  has_many :participations
  has_many :event_hostings

  has_many :groups_joined, through: :memberships, source: :group
  has_many :groups_owned, through: :organizations, source: :group
  has_many :events_joined, through: :participations, source: :event
  has_many :events_hosted, through: :event_hostings, source: :event

  after_initialize :ensure_session_token!

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)
    if user && user.is_password?(password)
      return user
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def is_member?(group)
    self.groups_joined.include(group)
  end

  def is_organizer?(group)
    self.groups_owned.include(group)
  end

  private
  def ensure_session_token!
    self.session_token ||= generate_session_token
  end
end
