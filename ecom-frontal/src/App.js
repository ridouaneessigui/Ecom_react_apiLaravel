import './App.css';
import React, { Fragment}  from 'react';
import Header from './Pages/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Addproduit from './Pages/Addproduit';
import Register from './Pages/Register';
import Updateproduit from './Pages/Updateproduit';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Fragment>
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/ajouter" element={<Addproduit/>} />
    <Route exact path="/Register" element={<Register/>} />
    <Route exact path="/Modifier" element={<Updateproduit/>} />
    </Fragment>
    </BrowserRouter>
    </div>
  );
}

export default App;
