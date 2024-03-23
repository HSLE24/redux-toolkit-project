import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar'
import NavbarLeft from './component/NavbarLeft'
import PrivateRoute from './route/PrivateRoute';

function App() {
  
  const menus = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성' ];

  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=>{
    console.log("authenticate: ", authenticate);
  }, [authenticate])

  return (
    <div>
      <NavbarLeft  menus={ menus }/>
      <Navbar setAuthenticate={ setAuthenticate } authenticate={ authenticate } menus={ menus }/>
      <Routes>
        <Route path="/" element={ <ProductAll />} />
        <Route path="/login" element={ <Login setAuthenticate={ setAuthenticate } />} />
        <Route path="/product/:id" element={ <PrivateRoute authenticate={ authenticate }/>} />
      </Routes>
    </div>
  );
}

export default App;
