import React from 'react';
import {Link,Outlet} from 'react-router-dom'; 
import {ReactComponent as Crwlogo} from '../../asset/crown.svg';

import './Navbar.scss';
const Navbar = () => {
  return (
    <React.Fragment>
        <div className='navigation'>
            <Link to='/'>
                <Crwlogo className='logo-container'/>
            </Link>
            <div className='nav-links-container'>
                <Link to='auth'>Sing Up</Link>
                <Link to='shop'>SHOP</Link>
            </div>
        </div>
        
        <Outlet/>
    </React.Fragment>
  )
}

export default Navbar