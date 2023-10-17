import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import validationRecipe from '../../Validation/validationRecipe'
import { allRecipes, createRecipe } from "../../redux/actions";
import style from "./postRecipe.module.css"

const PostRecipe = () => {    

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.allRecipes)


    const [errors, setErrors] = useState({})
    const [createSuccess, setCreateSuccess] = useState(false);
    const [form, setForm] = useState(
        {name:'',
        image:'',
        summary:'',
        healthScore:'',
        steps:'',
        diets:''

    });


    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]:value})
    };

    const handleCreate = () => {
        const validationErrors = validationRecipe(recipes, form);
        const dietsArray = typeof(form.diets) === "string" && form.diets.includes(',')?
         form.diets.split(",").map((diet) => diet.trim()):
         [...form.diets]

        // const dietsArray = form.diets.split(",").map((diet) => diet.trim());
        const updatedFormData = {...form, diets: dietsArray.join('')};
        if(Object.keys(validationErrors).length === 0){
            dispatch(createRecipe(updatedFormData));
            setCreateSuccess(true);
            setForm({
              name: "",
              image: "",
              summary: "",
              healthScore: "",
              steps: "",
              diets: ""

            });
        };

        setErrors(validationErrors);
    };



    useEffect(() => {
        dispatch(allRecipes());
    }, [dispatch]);



    const formValidate = 
    form.name.length === 0 ||
    form.image.length === 0 ||
    form.summary.length === 0 ||
    form.healthScore.length === 0 ||
    form.steps.length === 0 ||
    form.diets.length === 0;



    return(
        <div className={style.container}>
        
        <div className={style.subContainer}>
            <div>
                <label className={style.name}>Name: </label>
                <input type="text" onChange={changeHandler} name="name" value={form.name} placeholder="Enter your recipe name" className={style.input}/>
            </div>
            <div>
                <label className={style.name}>Image: </label>
                <input type="text" onChange={changeHandler} name="image" value={form.image} placeholder="Enter your image URL" className={style.input}/>
            </div>
            <div>
                <label className={style.name}>Summary: </label>
                <input type="text" onChange={changeHandler} name="summary" value={form.summary} placeholder="Enter your recipe summary" className={style.input}/>
            </div>
            <div>
                <label className={style.name}>HealtScore: </label>
                <input type="range" min='1' max='100' onChange={changeHandler} name="healthScore" value={form.healthScore}  className={style.input}/>
                <span>{form.healthScore}%</span>
            </div>
            <div>
                <label className={style.name}>Steps: </label>
                <input type="text" onChange={changeHandler} name="steps" value={form.steps} placeholder="Enter your recipe steps" className={style.input}/>
            </div>
            <div>
                <label className={style.name}>Diets: </label>
                <input type="text" onChange={changeHandler} name="diets" value={form.diets} className={style.input}/>
            </div>
            <button onClick={handleCreate} disabled={formValidate} className={style.search}>Submit</button>
            {createSuccess && alert('Your recipe was created')}
            {Object.keys(errors).length > 0 &&  <p>Failed to create recipe. Please check the form.</p>}
            </div>
            <div className={style.subContainer}>
                <img src="https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg"/>
            </div>        
        
        </div>
    )
}

export default PostRecipe