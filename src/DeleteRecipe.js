import React, { useState } from "react";

function DeleteRecipe ({recipes, recipeIndex, setRecipes}) {


const updatedRecipes = () => {
    const removedRecipe = recipes.filter((recipe, index) => index !== recipeIndex)
    setRecipes(removedRecipe)
}

return (
    <button onClick={updatedRecipes} name="delete" className="delete">
        Delete
    </button>
)
}

export default DeleteRecipe;