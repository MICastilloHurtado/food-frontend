import style from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return(
        <Link to={`details/${props.id}`}className={style.link}>
        <div className={style.card}>
            <img src={props.image} alt='IMAGE NOT FOUND'/>
            <p className={style.name}>{props.name}</p>
            <p className={style.diets}>Diets: {props.diets}</p>
        </div>
        </Link>
    )
}

export default Card