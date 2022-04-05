import React from 'react';
import Home from './route/Home/Home';
import {Route,Routes} from 'react-router-dom';
import Navbar from './route/Navbar/Navbar';
import Shop from './route/Shop/Shop';
import SignInUp from './route/SignInUp/SignInUp';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='sign' element={<SignInUp/>}/>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
