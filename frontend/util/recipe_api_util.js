import { $CombinedState } from "redux";

export const fetchRecipes = () => {
    return $.ajax({
        method: "GET",
        url: "/api/recipes", 
    });
};