import React from "react"
import style from './Paginate.modules.css'
import { useDispatch} from "react-redux"
import { paginado } from "../../redux/actions";

const Paginate = ({tamañoRecipe, tamañoPagina, pageActual}) => {
    
    const dispatch = useDispatch();
    const pageNumbers = [];
    for(let i = 0; i < Math.ceil(tamañoRecipe / tamañoPagina); i++){
        pageNumbers.push(i + 1);
    }

    const prevHandler = () => {
        if(pageActual > 1){
            dispatch(paginado(pageActual - 1))
        }else{
            alert('There are no previous recipes')
        }
    }

    const clickHandler = (numero) => {
        dispatch(paginado(numero))
    }

    const nextHandler = () => {
        if(pageActual < pageNumbers.length){
            dispatch(paginado(pageActual + 1))
        }else{
            alert("there are no more recipes")
        }
    }

    return(
        <div className={style.buton}>
            <button onClick={prevHandler} className={style.back}>{'<<'}</button>
            {pageNumbers.map(page => 
                <button
                key={page}
                onClick={() => clickHandler(page)}>
                    {page}
                </button>)}
            <button onClick={nextHandler}>{'>>'}</button>          

        </div>
    )
}

export default Paginate