class Api::CoursesController < ApplicationController
    def index
        @courses = Course.all
    end

    def show 
        @course = Course.find(params[:id])
        render :show
    end

    private

    def course_params
        params.require(:course).permit(:course)
    end
end