import { useSelector } from "react-redux"
import Paginate from "../../modules/paginate/Paginate"
import Card from "../../modules/card/Card"
import style from "./Busqueda.module.css"

const Busqueda = () => {

const recipe = useSelector((state) => state.recipeByName)
const paginas = useSelector((state) => state.page)

// **************************Paginado*************************************
let currentRecipes = [];
    const tamañoRecipe = recipe.length;
    const itemsForPage = 12;
    let indexFinal = itemsForPage * paginas // 12*1=12
    let inicial = indexFinal - itemsForPage // 12-12=0
    currentRecipes = recipe.slice(inicial, indexFinal)


    return(
        <div className={style.contenedor}>
            {currentRecipes?.map(recipe =>
                <Card
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                name={recipe.name}
                diets={recipe.diets.name?recipe.diets.name:recipe.diets.join(', ')} />)}

            {currentRecipes.length > 12 && (
              <div className={style.paginate}>
               <Paginate
                 pageActual={paginas}
                 tamañoRecipe={tamañoRecipe}
                 tamañoPagina={itemsForPage}
               />
             </div>
            )}
        </div>
    )
}

export default Busqueda