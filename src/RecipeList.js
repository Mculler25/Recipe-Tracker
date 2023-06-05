import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, deleteRecipes}) {
  
  const recipeTableData = recipes.map((recipeObject)=>{
    const {name, cuisine, photo, ingredients, preparation} = recipeObject;
    return <Recipe key={name}
    recipes={recipeObject}
    name={name} 
    cuisine={cuisine} 
    photo={photo} 
    ingredients={ingredients} 
    preperation={preparation} 
    deleteRecipes={deleteRecipes}
    />
  })
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

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
          {recipeTableData}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
