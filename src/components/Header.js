import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math magicians</h1>
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li style={{ marginRight: '10px', paddingRight: '10px', borderRight: '2px solid rgb(0, 0, 255)' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '10px', paddingRight: '10px', borderRight: '2px solid rgb(0, 0, 255)' }}>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  </header>

);

export default Header;
