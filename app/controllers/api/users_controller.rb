class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save!
            login!(@user)
            render :show
        else
            # render json: @user.errors.full_messages, status: 401
            render json: { email: params[:email] }, status: 401
        end
    end

    def show
        @user = User.find_by(email: params[:email])
        # debugger
        if @user
            render :show
        else
            render json: { email: params[:email] }, status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :display_name, :icon_url)
    end
end
