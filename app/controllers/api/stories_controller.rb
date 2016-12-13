class Api::StoriesController < ApplicationController

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def index
    @stories = Story.all
  end

  def show
    @story = Story.includes(comments: :user).find(params[:id])
    render :show
  end

  def update
    @story = current_user.stories.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = current_user.stories.find(params[:id])
    @story.destroy
    render :show
  end

  private
  def story_params
    params.require(:story).permit(:title, :body)
  end

end
