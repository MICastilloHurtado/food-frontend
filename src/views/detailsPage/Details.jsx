import { useParams } from "react-router-dom"
import {  getRecipeById } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import style from './Details.module.css'

const Details = () => {

    const dispatch = useDispatch()
    const recipe = useSelector((state) => state.recipeById)
    const {id} = useParams()
    

    useEffect(() =>{
        dispatch(getRecipeById(id))
    }, [id, dispatch])

    const getDietsString = (diets) => {
        if (Array.isArray(diets)) {
          return diets.map((diet) => {
            if (typeof diet === "string") {
              return diet;
            } else if (typeof diet === "object" && diet.name) {
              return diet.name;
            }
          }).join(", ");
        }
        return "";
      };

      
      

      if (!recipe.name) {
        return <div className={style.loading}>Loading...</div>; 
      }


    return(
        <div className={style.container}>
            <h2 className={style.name}>{recipe.name}</h2>
            <img src={recipe.image} alt='IMAGE NOT FOUND' className={style.image}/>
            <h2 className={style.name}>Summary: {recipe.summary}</h2>
            <h2 className={style.name}>HealthScore: {recipe.healthScore}</h2>
            <h2 className={style.name}>Diets: {getDietsString(recipe.diets)}</h2>
        </div>
    )
}

export default Details