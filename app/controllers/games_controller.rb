class GamesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :show, :destroy]
  before_action :set_game, only: [:show, :update, :destroy]

  # GET /games
  def index
    @games = Game.all

    render json: @games
  end

  # GET /games/1
  def show
    render json: @game, include: :comments
  end

  # POST /games
  def create
    @game = Game.new(game_params)
    @game.user = @current_user

    if @game.save
      render json: @game, status: :created
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games/1
  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games/1
  def destroy
    @game.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = @current_user.game.find(params[:id])
  
    end

    # Only allow a trusted parameter "white list" through.
    def game_params
      params.require(:game).permit(:name, :genre, :img_url, :yr, :rating, :user_id)
    end
end
