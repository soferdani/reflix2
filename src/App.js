import './App.css';
import logo from './utils/logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from './utils/data.json' 
import { useState } from 'react';
import Landing from './component/Landing';
import Catalog from './component/Catalog';
// import MovieDetail from './component/MoveDetail'

function App() { 

  const [info, setInfo] = useState(data)  

  const userEntered = (userName) => {//TODO: make sure this is working
    setInfo({ currentUser:userName})
  }

  const handelRent = (userName, movie) => {
    const user = info.users.find(u => u.name === userName)
    if (user.budget>= 5) {
      if (user.rentedMovies.find(m => m.id === movie.id)) {
        setInfo(user.rentedMovies.push(movie))
        setInfo(user.budget-= 10)
        setInfo(user)

        // user.rentedMovies.push(movie)
        // user.budget -= 10
      } else {
        alert ('This movie is already in the renting list')
      }
    } else {
      alert('Not enough budget for renting this movie.')
    }
  }

  const handelRemove = (userName,movieId) => {
    const user = info.users.find(u => u.name === userName);
    const movieIndex = user.rentedMovies.findIndex(m => m.id == movieId);
    user.rentedMovies.splice(movieIndex, 1);
    user.budget += 3;
    setInfo(user)
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
            state={info}
            handelRemove={handelRemove}
            handelRent={handelRent}/>} />
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
