import './App.css';
import {Details, Home, Landing, PostRecipe} from './views'
import Busqueda from './views/Busqueda/Busqueda';
import NavBar from './modules/NavBar/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/details/:id' element={<Details/>}/>
        <Route path='/post' element={<PostRecipe/>}/>
        <Route path='/home/search' element={<Busqueda/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
