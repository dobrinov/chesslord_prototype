class CreateGamesUsers < ActiveRecord::Migration
  def change
    create_table :games_users do |t|
      t.belongs_to :player
      t.belongs_to :game

      t.timestamps
    end
  end
end
