import { Link, useNavigate, useParams } from "react-router-dom"
import style from './NavBar.module.css'
import Search from "../searchBar/SearchBar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getNameRecipe } from "../../redux/actions"



const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {name} = useParams()
    
    useEffect(()=>{
        if(name)dispatch(getNameRecipe(name))
    }, [name, dispatch])

    const handleSearch =  async (query) => {
        try {
            await dispatch(getNameRecipe(query))
            navigate('/home/search')       
            
        } catch (error) {
            alert('This recipe does not exist')
        }
    }

    return(
        <div>

        <div className={style.container}>
            <Link to='/home' className={style.buttonContainer}>
                <button className={style.button} >Home</button>
            </Link>
            <div className="nav__search">
            <Search onSearch={handleSearch} />
            </div>
            <Link to='/post' className={style.buttonContainer}>
                <button className={style.button}>Create new recipe</button>
            </Link>
        </div>

        
        </div>
    )
}

export default NavBar