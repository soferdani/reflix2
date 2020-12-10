import './App.css';
import logo from './utils/logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from './utils/data.json' 
import { useState } from 'react';
import Landing from './component/Landing';
import Catalog from './component/Catalog';
// import MovieDetail from './component/MoveDetail'

function App() { 

  const [info] = useState(data)
  const [user, setUser] = useState('')
  const userEntered = (userName) => {
    setUser(userName) // mube need to fix 
  }

  const handelMovieRent = (userName, movie) => {

  } 

  return (
    <Router>
      <div className="App">
        <div id='header'>
          <div id='links'>
            <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
          </div>
          <img id='logo' src={logo} alt='logo'/>
        </div>
      
      <Route exact path='/' render={()=> <Landing userEntered={userEntered} state={info}/>} />
        <Route path='/catalog/:userName'
          render={({ match }) => <Catalog
            match={match}
            handelMovieRent={handelMovieRent}
            state={info} />} />
      {/* {info.catalog.map(m=> {
        return (
          <Route exact path={`/movie/${m.id}`} render={({match})=> <MovieDetail match={match} movie={m} />} />
        )
      })} */}
      </div>
    </Router>
  );
}

export default App;
