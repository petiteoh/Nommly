class Api::NomsController < ApplicationController
    def create
        # debugger
        @nom = Nom.new
        @nom.user_id = current_user.id
        @nom.recipe_id = params[:recipeId]
        if @nom.save
            # debugger
            # render json: @nom
            render :show
            
        else
            # debugger
            render json: ["You already nommed this recipe"]
        end            
    end

    def destroy
        # debugger
        @nom = current_user.noms.find_by(recipe_id: params[:recipeId])
        @nom.destroy
        render :show
    end

    private

    def find_recipe
        @recipe = Recipe.find(params[:recipe_id])
    end
end
