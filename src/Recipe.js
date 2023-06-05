import React from "react";

function Recipe ({recipes, deleteRecipes,}) {
    const {name, cuisine, photo, ingredients,preparation} = recipes;
    return (
        <tr>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td><img src={photo} /></td>
          <td className="content_td"><p>{ingredients}</p></td>
          <td className="content_td"><p>{preparation}</p></td>
          <td><button name = "delete" onClick={() => deleteRecipes(recipes)}>Delete</button></td>
        </tr>
    )
}

export default Recipe;