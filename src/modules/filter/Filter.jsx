import {filterCreated, orderByScore, orderBy_AZ, filterByDiet} from '../../redux/actions'
import { allRecipes } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'
import React from 'react'

const Filter = ({diet, setOrder, setScore}) => {

    const dispatch = useDispatch() 


    const handleOrderByName = (event) => {
        dispatch(orderBy_AZ(event.target.value))
        setOrder(event.target.value)
    };

    const handleOrderScore = (event) => {
        dispatch(orderByScore(event.target.value))
        setScore(event.target.value)
    };

    const handleFilterDiets = (event) => {
        dispatch(filterByDiet(event.target.value))
    };

    const handleFilterCreated = (event) => {
        dispatch(filterCreated(event.target.value))
    };

    /*corregir handle reset filter*/
    const handleClick = () => {
        dispatch(allRecipes())
    };
    
    return (
        <div className={style.container}>
            {/*-----------ordenar de a-z y z-a------------------*/}
            <select onChange={handleOrderByName}>
                <option>sort alphabetically...</option>
                <option value="asc">A - Z</option>
                <option value="des">Z - A</option>
            </select>

            {/*----------------All dietas al select---------------*/}
            <select onChange={handleFilterDiets}>
                <option value="default">Select diet...</option>
                <option value="all">All</option>
                {diet?.map((el) => 
                    <option value={el.name} key={el.id}>
                        {el.name}
                    </option>
                )}
            </select>

            {/* ---------------Filtrar por puntaje Score----------------- */}
            <select onChange={handleOrderScore}>
                <option >Filter for healthScore...</option>
                <option value="asc">Lower</option>
                <option value="des">Higher</option>
            </select>

            {/*-------------filtrar los de la base de datos-----------*/}
            <select onChange={handleFilterCreated}>
                <option >From...</option>
                <option value="api">Api</option>
                <option value="created">Created</option>
            </select>


            <button onClick={handleClick}>Reset Filter</button>
        </div>
    )
};

export default Filter

