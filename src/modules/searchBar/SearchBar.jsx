import { useState } from "react";
import style from './SearchBar.module.css'


export default function Search({onSearch}) {

  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)    
  };

  const handleClick = () => {
    if(name === ""){
      alert('Please enter a recipe name')
    }else{
      onSearch(name)
      setName('')
    }
  };    

    return(
       
      <div className={style.container}>
        
          <input onChange={handleChange} type="search" placeholder="search Recipe" value={name} className={style.button}/>
          <button onClick={handleClick} className={style.search}>Search</button>
          
        
      </div>
    
    );
}