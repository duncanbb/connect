class Api::StoriesController < ApplicationController

  def create
    @story = Story.new(user_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:story).permit(:title, :body)
  end

end
