class Api::RecipesController < ApplicationController
    def index
        @recipes = Ingredient.all
    end

    def show 
        @recipe = Ingredient.find(params[:id])
        render :show
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:ingredient)
    end
end
