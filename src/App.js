// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailAnnonce from './components/DetailsAnnonce/DetailAnnonce';
import Acceuil from './components/Acceuil/Acceuil';
import CreateUser from './components/Connexion/Inscrir';
import Inscription from './components/Connexion/Inscription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path="/inscrire" element={<CreateUser/>} />
        <Route path="/details/:id"  element={<DetailAnnonce/>}/>
      
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
