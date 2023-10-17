import { ALL_RECIPES, POST_RECIPE, FILTER_BY_DIET, ORDER_BY_SCORE,
     ORDER_BY_NAME, FILTER_DB_OR_API, GET_NAME_RECIPE, CLEAN_DETAILS,
     PAGINATE, GET_ALL_DIETS, GET_BY_ID} from "./actionsTypes";

const initialState = {
    diets:[],
    recipes: [],
    allRecipes :[],
    recipeByName:[],
    createRecipe: [],
    recipeById: {},
    page: 1
}

const reducer = (state=initialState, {type, payload}) => {
    switch(type){

        case GET_BY_ID:
            return{
                ...state,
                recipeById:payload
            }

        case GET_NAME_RECIPE:
            return{
                ...state,
                recipeByName: payload
            }

        case ALL_RECIPES:
            return{
                ...state,
                allRecipes:payload
            };

        case GET_ALL_DIETS:
            return{
                ...state,
                diets:payload
            }

        case POST_RECIPE:
            return{
                ...state,
                createRecipe: payload
            };

        case FILTER_BY_DIET:{
            const recipes = [...state.allRecipes];

            if(payload === 'all'){
            return {...state,
                    allRecipes:recipes,
                    page:1};
            }else{
                const recipesFiltered = recipes.filter(recipe => recipe.diets.includes(payload));
    
                return{
                    ...state,
                    allRecipes:recipesFiltered,
                    page:1
                }
            }

        }

        case ORDER_BY_NAME :

        let sortArray = [...state.allRecipes]; // Crear una copia del array para no modificar el estado actual

        sortArray.sort((a, b) => {
          if (payload === "asc") {
            return a.name.localeCompare(b.name); // Orden ascendente usando localeCompare
          } else {
            return b.name.localeCompare(a.name); // Orden descendente usando localeCompare
          }
        });
            return{
                ...state,
                allRecipes:sortArray,
                page: 1
            };

        case ORDER_BY_SCORE : 

            let recipes = [...state.allRecipes]

            recipes.sort((a,b) => {
                if(payload === "asc"){
                return a.healthScore - b.healthScore;
            }
            
            if(payload === "des"){
                return b.healthScore - a.healthScore;
            }
            });

            return{
                ...state,
                allRecipes:recipes,
                page: 1
            };

        

        case CLEAN_DETAILS: 
            return{
                ...state,
                recipeById: {}
            }
        

        case FILTER_DB_OR_API:{
            const allCreated = [...state.allRecipes];
            let createFilter =
            payload === "created"
            ? allCreated.filter((recipe) => recipe.created === true)
            : allCreated.filter((recipe) => recipe.created === false);
            
            return{
                ...state,
                allRecipes:createFilter,
                page:1             
                
            };
        }

        case PAGINATE:{
            return{
                ...state,
                page:payload
            }
        }

       

        default:
            return {...state}
    }

    

};

export default reducer