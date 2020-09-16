class User < ApplicationRecord
has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {minimum: 5}

  has_many :games
  has_many :comments
end
