import { Link } from 'react-router-dom'

function Movie(props) {
    


    
    return (
        <div className="movieBox">
            <span id='plus'>+</span><span id='minos'>-</span><h4 className='movieTitle'>{props.title}</h4>
            <Link to={`/movie/${props.id}`}><img src={props.img} alt="" width="250" height="250"/></Link>
        </div>
    )
}

export default Movie