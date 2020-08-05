class Api::RecipesController < ApplicationController
    def index
        # debugger
        if params[:query]
            # @recipe = Recipe
            # .select("recipe.title, recipe.course.pluck(:course), recipe.cuisine.pluck(:cuisine), recipe.ingredients.pluck(:ingredient)")
        #     .where("recipe.title LIKE '%pesto%', recipe.course LIKE 'erica'")   
        #         .select("recipe.title, recipe.course.pluck(:course), recipe.cuisine.pluck(:cuisine), recipe.ingredients.pluck(:ingredient)")
        #         .where("recipe.title LIKE '%#params[:title]}%'")
        #         ,"recipe.course LIKE ?", "recipe.cuisine LIKE ?", "recipe.ingredients LIKE ?" "%#{params[:query]}%")
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

            @recipes = search_results.uniq
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
