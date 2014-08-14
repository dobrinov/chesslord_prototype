class Game < ActiveRecord::Base
  has_and_belongs_to_many :players, class_name: "User", association_foreign_key: "player_id"
  belongs_to :host, class_name: "User"
end
