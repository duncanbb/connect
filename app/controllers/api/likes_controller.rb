class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.all
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @like.destroy
    render :show
  end

  private
  def like_params
    params.require(:like).permit(:story_id)
  end

end
