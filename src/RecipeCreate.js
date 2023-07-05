import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({initialFormState});

  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }

  const addRecipe = (newRecipe)  => {
    setRecipes([...recipes, newRecipe]) 
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addRecipe(formData)
    setFormData(initialFormState)
  }   

  return (
    <div className="form-row">
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                required={true}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input 
                required={true}
                type="text"
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input 
                required={true}
                type="url"
                id="url"
                name="photo"
                placeholder="URL"
                value={formData.photo}
                onChange={handleChange}
              />
            </td>

            <td>
              <textarea 
                required={true}
                type="textbox"
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>

            <td>
              <textarea 
                required={true}
                type="text"
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </div>
  );
}

export default RecipeCreate;
