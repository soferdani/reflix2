import Movie from "./Movie";
import '../styles/Catalog.css'

function Catalog(props) {
    console.log(props.state.users[0].budget);



    return (
        <div className="catalog">
            <div className="catalog-header">
                <input className='search' placeholder='search' />
                <div className="userInfo">
                    <img id='userInfoAvatar' src="" alt="" />
                    <h3>{props.state.users[0].name},</h3>
                    <h3>Budget: {props.state.users[0].budget} .00$</h3>
                </div>
            </div>
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