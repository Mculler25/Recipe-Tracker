import React, { useState } from "react";
// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

function RecipeCreate({addRecipeHandler}) {
  const intialFormData = {
    name : "",
    cuisine : "",
    photo : "",
    ingredients : "",
    preparation : ""
    }
  
  const [formData, setFormData] = useState(intialFormData);

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    addRecipeHandler({
      ...formData
    })
    setFormData(intialFormData);
  }
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="recipe-form">
              <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name}/>
            </td >
            <td className="recipe-form">
              <input type="text" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}/>
            </td>
            <td className="recipe-form">
              <input type="url" name="photo" placeholder="Photo" onChange={handleChange} value={formData.photo}/>
            </td>
            <td> <textarea 
             name="ingredients" 
             placeholder="Ingredients" 
             required={true} rows={3} 
             onChange={handleChange} 
             value={formData.ingredients}
            /></td>
            <td> <textarea 
              name="preparation" 
              placeholder="Preperations" 
              required={true} rows={3}  
              onChange={handleChange} 
              value={formData.preparation}
            /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
