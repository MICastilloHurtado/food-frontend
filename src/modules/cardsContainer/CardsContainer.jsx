import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./CardsContainer.module.css"
import Paginate from "../paginate/Paginate";


const CardsContainer = () => {
    
    const recetas = useSelector(state => state.allRecipes)
    const paginas = useSelector((state) => state.page)
    

    // **************************Paginado*************************************
    let currentRecipes = [];
    const tamañoRecipe = recetas.length;
    const itemsForPage = 12;
    let indexFinal = itemsForPage * paginas // 12*1=12
    let inicial = indexFinal - itemsForPage // 12-12=0
    currentRecipes = recetas.slice(inicial, indexFinal)

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


 
    return(
        <div className={style.container}>
            {currentRecipes?.map(recipe =>
                <Card
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                name={recipe.name}
                diets={getDietsString(recipe.diets)} />)}
        <div className={style.paginate}>
            <Paginate pageActual={paginas}
            tamañoRecipe={tamañoRecipe}
            tamañoPagina={itemsForPage}/>
        </div>
        </ div>
    )
}

export default CardsContainer