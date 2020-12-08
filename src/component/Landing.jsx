import { Link } from "react-router-dom";


function Landing(props) {
    return (
        <div>
            <h2>how is watching??</h2>
            {props.state.users.map((u, i) => {
                return <Link to='/catalog' key={i}> {u.name}</Link>
            })}
        </div>
    )   
}

export default Landing;