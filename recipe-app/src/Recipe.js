import React from 'react'
import style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients, loading}) => {
    
        return (
            <div className={style.recipe}>
                <h1 className = {style.title}>{title} </h1>
                <h5>{calories} calories</h5>
                
                <ul className = "list">
        {ingredients.map(ingredient =>(
            <li className = {style.text}>{ingredient.text}</li>
        ))}</ul>
        <img src={image} className= {style.image} alt=""/>
            </div>
        )
    }


export default Recipe;