class Api::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
    end

    def show 
        @recipe = Recipe.find(params[:id])
        render :show
    end

    private

    def recipe_params
        params.require(:recipe).permit(:title, :description, :calories, :directions, :cuisine_id, :course_id, :creator, :total_time, :image_url)
    end
end
