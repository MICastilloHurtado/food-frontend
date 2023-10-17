import { ALL_RECIPES, POST_RECIPE, FILTER_BY_DIET, ORDER_BY_SCORE,
     ORDER_BY_NAME, FILTER_DB_OR_API, GET_ALL_DIETS, GET_NAME_RECIPE,
     CLEAN_DETAILS, PAGINATE, GET_BY_ID} from "./actionsTypes"
import axios from 'axios'


//************************LISTAR TODAS LAS RECETAS********************************** */
export const allRecipes = () => {
    const endpoint = 'http://localhost:3001/food/recipes';
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type : ALL_RECIPES,
            payload : data
        })
    }
};

//************************BUSCAR POR ID********************************** */

export const getRecipeById = (id) =>{
    const endpoint = `http://localhost:3001/food/recipes/${id}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type : GET_BY_ID,
            payload : data
        })
    }
};

//************************LISTAR RECETA POR NAME ********************************** */
export const getNameRecipe = (name) => {
    const endpoint = `http://localhost:3001/food/recipesName?name=${name}`;

    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: GET_NAME_RECIPE,
            payload: data
        })
    }
}

//************************LISTAR TODAS LAS DIETAS********************************** */
export const allDiets = () => {
    const endpoint = "http://localhost:3001/food/diets"
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type : GET_ALL_DIETS,
            payload : data
        })
    }
}

//*************************CREAR RECETA********************************* */

export const createRecipe = (create) => {
    const endpoint = 'http://localhost:3001/food/recipes'
    return async (dispatch) => {
        const {data} = await axios.post(endpoint, create);
        return dispatch({
            type: POST_RECIPE,
            payload : data
        })
    }
};

//**************************FILTRAR POR DIETA******************************** */

export const filterByDiet = (diet) => {
    return{
        type: FILTER_BY_DIET,
        payload: diet
    }
};

//****************************FILTRAR DE A-Z Y Z-A****************************** */

export const orderBy_AZ = (order) => {
    return{
        type: ORDER_BY_NAME,
        payload: order
    }
};

//*******************************FILTRAR POR SCORE*************************** */

export const orderByScore = (score) => {
    return{
        type: ORDER_BY_SCORE,
        payload: score
    }
};

//*******************************FILTRAR POR SCORE*************************** */

export const filterCreated = (data) => {
    return{
        type: FILTER_DB_OR_API,
        payload: data,
    };
}

//******************************LIMPIAR******************************* */

export const cleanDetails = () => {
    return{
        type: CLEAN_DETAILS
    }
}


//******************************paginado******************************* */

export const paginado = (numero) => {
    return(dispatch) => {
        dispatch({
            type : PAGINATE,
            payload: numero
        })
    }
}