import { Link } from "react-router-dom";
import '../styles/Landing.css'

function Landing(props) {
    return (
        <div className='landing-container'>
            <h2>how is watching??</h2>
            <div className="users">
                {props.state.users.map((u, i) => {
                    return (
                        <Link to={`/catalog/${u.name}`} key={i}>
                            <div id={u.name} className="userCard" style={{backgroundImage: "url(" + u.avatar + ")"}}>
                                <span className='userCardName'>{u.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )   
}

export default Landing;