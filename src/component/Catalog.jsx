import Movie from "./Movie";
import '../styles/Catalog.css'


function Catalog(props) {

    const currentUserName = props.match.params.userName
    const currentUserInfo = props.state.users.find(u => u.name === currentUserName )
    
    const movieComponent = (user, movie, isRented) => {
        return <Movie key={movie.id} movie={movie} 
                user={user.name} rented={isRented} 
                handleRent={this.props.handleRent}
                handleRemove={this.props.handleRemove}/>
    }
    
    const render
    

    return (
        <div className="catalog">
            <div className="catalog-header">
                <input className='search' placeholder='search' />
                <div className="userInfo">
                    <img id='userInfoAvatar' src="" alt="" />
                    <h3>userName,</h3>
                    <h3>Budget: {currentUserInfo.budget} .00$</h3>
                </div>
            </div>
            {currentUserInfo.rentedMovies.length > 0
                ? <div className='movies'>
                    <h3>Rented:</h3>
                    <div className="movieContainer">

                    </div>
                </div>
                : null
            }
            <div className="movieContainer">
                {props.state.catalog.map(m => {
                    return (
                        <Movie id={m.id} img={m.img} title={m.title} key={m.id} rented={m.isRented}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Catalog