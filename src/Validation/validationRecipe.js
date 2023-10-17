const validationRecipe = (recipes, formData) => {

    const errorRecipe = {}

    const duplicateRecipe = recipes.some(recipe => recipe.name.toLowerCase() === formData.name.toLowerCase());

    if(duplicateRecipe){
        errorRecipe.name = "The name is already taken, please enter a different name."
    }

    return errorRecipe
};

export default validationRecipe