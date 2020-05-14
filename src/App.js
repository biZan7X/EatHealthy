import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';
import logo from './logo.png'
require('dotenv').config();

function App() {

  
  const app_id = 'e9ee874a'
  const app_key = '15a5b7abc0f80e635d9cdf4b90851b28'

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')//this state to fetch the data everytime we press the button

  useEffect(()=>{
    getRecipes();
  },[query])//fetches everytime query changes


  const getRecipes = async () =>{
    const resposnse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
    const data = await resposnse.json()
    setRecipes(data.hits)//fetching from mthe server and then storing in the state
    console.log(data.hits)
  }


  const updateSearch = e =>{ //e-> event listner
    setSearch(e.target.value)
  }


  const getQuery = e =>{
    e.preventDefault();//to prevent the reload of page before changing the query
    setQuery(search)
    //setQuery('')//back to default
  }

  return (
    <div className="App">
      <div className="logo-bar">
        <img className="logo" alt="" src={logo}/>
      </div>
      <form className="search-form" onSubmit={getQuery}>
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {
        recipes.map(index =>( //now we are looping through the state
          <Recipe //printing out every thing of each index through the structure Recipe
          key={index.recipe.calories}
          title={index.recipe.label}
          cal={index.recipe.calories}
          image={index.recipe.image}
          ingredients={index.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
