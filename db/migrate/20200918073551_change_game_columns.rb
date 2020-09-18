class ChangeGameColumns < ActiveRecord::Migration[6.0]
  def change
    change_column :games, :yr, :string
    change_column :games, :rating, :string
  end
end
