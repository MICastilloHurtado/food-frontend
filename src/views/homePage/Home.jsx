import CardsContainer from "../../modules/cardsContainer/CardsContainer"
import { useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { allRecipes , allDiets} from "../../redux/actions"
import Filter from "../../modules/filter/Filter"
import { useLocation } from "react-router-dom"
import Busqueda from "../Busqueda/Busqueda"


const Home = () => {

    const dispatch = useDispatch()  
    const location = useLocation()
    const diets = useSelector((state) => state.diets)
    
    // ************************************************************************
    
    
    useEffect(()=>{
        dispatch(allRecipes())
    },[dispatch])

    useEffect(() =>{
        dispatch(allDiets())
    }, [dispatch])
    
  
    
    const [order, setOrder] = useState(''); //para guardar los ordenamientos
    const [score, setScore] = useState('');



    return(
        <div>
            {/*-----------Filtros----------------------*/}
            <div className="filter_paginate">
                <div>
                   {<Filter diet={diets} setOrder={setOrder} setScore={setScore} />}
                </div>

            </div>
            {location.pathname !== '/home/search' ? <CardsContainer/> : <Busqueda/>}
            
                       
        </div>
    )
}

export default Home