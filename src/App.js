import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function addRecipe (newRecipe) {
    setRecipes([...recipes, newRecipe])
  }

  function deleteRecipes(recipetoDelete) {
    let filteredRecipes = recipes.filter(e => e.name !== recipetoDelete.name)
    setRecipes(filteredRecipes);
    
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipes={deleteRecipes}/>
      <RecipeCreate addRecipeHandler={addRecipe}/>
    </div>
  );
}

export default App;
