class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @follows = Follow.all
  end

  def destroy
    @follow = current_user.out_follows.find(params[:id])
    @user = User.find_by(id: @follow.follower_id)
    @follow.destroy
    render :show
  end

  private
  def follow_params
    params.require(:follow).permit(:author_id)
  end

end
