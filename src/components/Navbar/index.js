import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

  
const Navbar = () => {
  return (
    <div>
      <Nav>
        <Bars />
  
        <NavMenu>
           <NavLink to='/index' activeStyle>
            Home
            </NavLink>
            <NavLink to='../../jbrowse/jbrowse' activeStyle>
             JBrowse 
           </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/help' activeStyle>
            Help
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};
  
export default Navbar;