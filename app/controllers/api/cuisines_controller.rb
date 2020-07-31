class Api::CuisinesController < ApplicationController
    def index
        @cuisines = Cuisine.all
    end

    def show 
        @cuisine = Cuisine.find(params[:id])
        render :show
    end

    private

    def cuisine_params
        params.require(:cuisine).permit(:cuisine)
    end
end
