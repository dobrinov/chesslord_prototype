module Api
  class GamesController < ApplicationController

    # POST /games
    def create
      @user = User.create # TODO: This should be replaced with logged in user
      @game = @user.hosted_games.build(game_params)

      respond_to do |format|
        if @game.save
          format.json
        else
          format.json
        end
      end

    end

    # PATCH /games/start
    def start
      # Spawn all the kings
    end

    private

    def game_params
      if params[:game]
        params[:game].permit(:board_size, :player_count)
      else
        {}
      end
    end

  end
end
