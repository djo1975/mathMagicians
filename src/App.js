import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import './footer.scss';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <footer className="footer">
        <p>© 2023 Math Magicians</p>
      </footer>
    </>
  );
}

export default App;
