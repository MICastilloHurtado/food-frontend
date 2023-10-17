// import style from './Landing.module.css'
import style from './Landing.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import chefs from '../../assets/chef1.png';
import vector1 from '../../assets/Vector1.png';
import vector2 from '../../assets/Vector2.png';

export default function Landing() {
  return (
    <div className={style.intro}>
      <div className={style.i__left}>
        <div className={style.i__name}>
          <h1> PI SPOONACULAR 2023</h1>
          <span>Marcos Isaac Castillo Hurtado </span>
          <span>
          Este PI está enfocado en el desarrollo de una API de recetas saludables para mantener un nivel de alimentación saludable, seleccionando entre cientos de recetas que te permitan facilitar tu alimentación diaria de manera eficiente y efectiva. Podrás buscar la receta de tu agrado, y seguir el paso a paso de cómo puedes prepararla, y los tipos de dietas que aplica esta receta de comida.
          </span>

          <Link to="/home">
            <button className={style.i__button}>Get in</button>
          </Link>
        </div>
      </div>
      <div className={style.i__right}>
        <img src={vector1} alt="vector 1" />
        <img src={vector2} alt="vector 1" />
        <img src={chefs} alt="vector 1" /* width="330px" height="380px" */ />
        <div className={style.blur} style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className={style.blur}
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
}
