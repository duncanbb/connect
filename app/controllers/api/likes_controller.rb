class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    sleep 0.5
    if @like.save
      @story = @like.story
      render "/api/stories/show.json.jbuilder"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.all
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @story = @like.story
    @like.destroy
    sleep 0.5
    render "/api/stories/show.json.jbuilder"
  end

  private
  def like_params
    params.require(:like).permit(:story_id)
  end

end
