export const fetchIngredients = () => {
    return $ajax({
        method: "GET",
        url: `/api/ingredients`,
    });
};

export const postUserPreferenceToIngredients = (ingredientId) => {
    return $.ajax({
        method: "POST",
        url: "/api/user_preferences",
        data: { ingredientId },
    });
};

export const deleteUserPreferenceToIngredients = (ingredientId) => {
    return $.ajax({
        method: "DELETE",
        url: "/api/user_preferences",
        data: { ingredientId },
    });
};