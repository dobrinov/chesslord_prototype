class GamesController < ApplicationController

  def create
    @user = User.create # TODO: This should be replaced with logged in user
    @game = @user.hosted_games.build

    respond_to do |format|
      if @game.save
        format.json
      else
        format.json
      end
    end

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
