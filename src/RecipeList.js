import React from "react";
import DeleteRecipe from "./DeleteRecipe";


function RecipeList({ recipes, setRecipes  }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const fullList = recipes.map((recipe, index) => {

    return (
    <tr>
      <td>
      <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
      <DeleteRecipe recipes={recipes} recipeIndex={index} setRecipes={setRecipes} />
      </td>
    </tr>
   ) })


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fullList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
