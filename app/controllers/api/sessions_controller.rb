class Api::SessionsController < ApplicationController

  def create
    @user = User.validate_credentials(
      params[:user][:username],
      params[:user][:password])
      if @user.nil?
      render json: "Credentials were wrong"
    else
      login!(@user)
      render "api/users/show"
    end
  end

  def destroy
    if !current_user
      render json: ["Improper credentials"], status: 404
    else
      logout!
      render json: {}
    end
  end

end
