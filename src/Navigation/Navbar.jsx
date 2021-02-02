import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'; 

class Navbar extends React.Component {

  render (){
    return <nav>
      <Link className='link' to='/'>
        <h1>Théo Gaudin</h1>
      </Link>
      <ul>
        <Link className='link' to='/contact'>
          <li className='list--item'>Contact</li>
        </Link>
      </ul>
    </nav>
  }
}

export default Navbar;