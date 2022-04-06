import React from 'react';
import Home from './route/Home/Home';
import {Route,Routes} from 'react-router-dom';
import Navbar from './route/Navbar/Navbar';
import Shop from './route/Shop/Shop';
import AuthenticationPage from './route/AuthenticationPage/AuthenticationPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='auth' element={<AuthenticationPage/>}/>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
