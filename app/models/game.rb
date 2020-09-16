class Game < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :yr, length: { is: 4 }, numericality: { only_integer: true}
  validates :rating, numericality: { only_integer: true, greater_than: 0, less_than: 6  }
end
