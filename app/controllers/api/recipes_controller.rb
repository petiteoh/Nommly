class Api::RecipesController < ApplicationController
    def index
        if params[:query]
            search_results = []
            recipes = Recipe.where("recipes.title ILIKE :query", query: "%#{params[:query]}%")
            search_results += recipes

            courses = Course.where("courses.course ILIKE :query", query: "%#{params[:query]}%")
            courses.each do |course| 
                search_results += course.recipes
            end

            cuisines = Cuisine.where("cuisines.cuisine ILIKE :query", query: "%#{params[:query]}%")
            cuisines.each do |cuisine|
                search_results += cuisine.recipes
            end

            ingredients = Ingredient.where("ingredients.ingredient ILIKE :query", query: "%#{params[:query]}%")
            ingredients.each do |ingredient|
                search_results += ingredient.recipes
            end

            @recipes = search_results.uniq
            
        # elsif current_user.disliked_ingredients.length > 0
        #     dislikes = Recipe.joins(:ingredients).where("ingredients.ingredient ILIKE :query", query: "%#{params[:query]}")
        #     # need to replace the query to actual user dislikes
        #     debugger
        #     @recipes = Recipe.where.not(id: dislikes)
        #     # @recipes = Recipe.all

        else 
            @recipes = Recipe.all
        end
        render :index
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
