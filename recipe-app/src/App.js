import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"



const App = () => {
  
  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("chicken")
  
  useEffect(() => {
  getRecipes();
}, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${"ec40a3ab"}&app_key=${"3895a352915ce562a328ff404a7a42ff"}`);

    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    console.log(query);
  }

  return (
    <div className = "App">
        <form onSubmit={getSearch} className = "search-form">
          
          <input type="text" 
          className = "search-bar" value={search} onChange={updateSearch}/>
          
          <button className = "search-button" type="submit">Search</button>
        </form>
        <div className = "recipes">
          {recipes.map(recipe =>(
            <Recipe
            key = {recipe.recipe.calories}
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients} />
          ))}
        </div>
    </div>
  );
}

export default App;
