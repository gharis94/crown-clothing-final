import React,{useContext} from 'react';
import {Link,Outlet} from 'react-router-dom'; 
import {ReactComponent as Crwlogo} from '../../asset/crown.svg';
import { UserContext } from '../../context/UserContext';
import {SignOutUser} from '../../utils/firebase/firebase';

import './Navbar.scss';
const Navbar = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser)
  return (
    <React.Fragment>
        <div className='navigation'>
            <Link to='/'>
                <Crwlogo className='logo-container'/>
            </Link>
            <div className='nav-links-container'>
              {
                currentUser?(<span className='nav-link' onClick={()=>SignOutUser()}>Sign Out</span>):<Link className='nav-link' to='auth'>Sign In</Link>
              }
                
                <Link className='nav-link' to='shop'>SHOP</Link>
            </div>
        </div>
        
        <Outlet/>
    </React.Fragment>
  )
}

export default Navbar