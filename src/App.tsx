import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './composants/Footer';
import { Adventure } from './pages/Adventure';
import { Campagnes } from './pages/Campagnes';
import { Characters } from './pages/Characters';
import { Connexion } from './pages/Connexion';
import { CreateCampagne } from './pages/CreateCampagne';
import { CreateCharacter } from './pages/CreateCharacter';
import { Hero } from './pages/Hero';
import { Home } from './pages/Home';
import { Inscription } from './pages/Inscription';




const App = () => {
  return (<div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Connexion" element={<Connexion/>} />
      <Route path='/Campagnes' element={<Campagnes/>} />
      <Route path='/Characters' element={<Characters/>} />
      <Route path='/CreateCampagne' element={<CreateCampagne/>} />
      <Route path='/CreateCharacter' element={<CreateCharacter/>} />
      <Route path='/Inscription' element={<Inscription/>} />
      <Route path='/Hero/:id' element={<Hero/>} />
      <Route path='/adventure/:id' element={<Adventure/>} />
      
      </Routes>
      </BrowserRouter>
      <Footer/>
  </div>
)
}


export default App;