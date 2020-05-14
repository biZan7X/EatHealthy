import React from 'react'
import styles from './recipes.module.css'


const Recipe = ({title,cal,image,ingredients}) =>{
    return(
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <p>Calories : {cal}</p>
            <img className={styles.images} src={image} alt=""/>
            <ol>
            Ingredients:
            {ingredients.map(index =>(
                <li>
                    {index.text}
                </li>
            ))}
            </ol>
        </div>
    )
}

export default Recipe