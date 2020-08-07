class Api::UserPreferencesController < ApplicationController
    before_action :ensure_logged_in

    def create
        @user_preference = @current_user.user_preferences.new(user_prefence_params)
        if @user_preference.save
            render :show # preferable_types information # send back user preference table and the user, prefered quisines/course/ingredience array (each will be its own array)
        else
            render json: ["Already added this preference"]
        end
    end

    def destroy
        @user_preference = @current_user.user_preferences.find_by(preferable_id: params[:preferableId])
        @user_preference.destroy
        render :show
    end

    private

    def user_preference_params
        params.require(:user_preference).permit(:preferable_type, :prefered)
    end
end
