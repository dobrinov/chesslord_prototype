class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :board_size, :null => false, :default => 16
      t.integer :player_count, :null => false, :default => 2
      t.belongs_to :host

      t.timestamps
    end
  end
end
