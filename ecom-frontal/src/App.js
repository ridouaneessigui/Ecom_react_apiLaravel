import './App.css';
import React  from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Pages/Login';
import Addproduit from './Pages/Addproduit';
import Register from './Pages/Register';
import Updateproduit from './Pages/Updateproduit';
import Protected from './Pages/Protected';
import Listproduits from './Pages/Listproduits';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route  path="/login"> <Login/> </Route>
    <Route  path="/ajouter"><Protected Cmp={Addproduit}/></Route>
    <Route  path="/"><Protected Cmp={Listproduits}/></Route>
    <Route  path="/Register"><Register/></Route>
    <Route  path="/Modifier"><Protected Cmp={Updateproduit}/></Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
