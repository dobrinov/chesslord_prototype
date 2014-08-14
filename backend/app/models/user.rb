class User < ActiveRecord::Base
  has_many :hosted_games, class_name: "Game", foreign_key: "host_id"
  has_and_belongs_to_many :games, foreign_key: "game_id"
end
