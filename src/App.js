import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from './utils/data.json' 
import { useState } from 'react';
import Landing from './component/Landing';
import Catalog from './component/Catalog';

function App() { 

  const [info] = useState(data)
  
  return (
    <Router>
      <div id='main-links' className="App">
        <Link to='/'>Home</Link>
        <Link to='/catalog'>Catalog</Link>
        <hr/>
      </div>
      <Route exact path='/' render={()=> <Landing state={info}/>} />
      <Route exact path='/catalog' render={() => <Catalog state={info} />} />
    </Router>
  );
}

export default App;
