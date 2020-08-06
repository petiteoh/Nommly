class Api::UserPreferencesController < ApplicationController
    before_action :ensure_logged_in

    def create
        @user_preference = @current_user.user_preferences.new(user_prefence_params)
        @user_preference.save
        render :show # preferable_types information # send back user preference table and the user, prefered quisines/course/ingredience array (each will be its own array)
    end

    private

    def user_preference_params
        params.require(:user_preference).permit(:preferable_id, :preferable_type)
    end
end
