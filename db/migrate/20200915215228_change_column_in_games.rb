class ChangeColumnInGames < ActiveRecord::Migration[6.0]
  def change
    change_column :games, :yr, :integer
  end
end
