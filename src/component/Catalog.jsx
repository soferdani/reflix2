import Movie from "./Movie";

function Catalog(props) {
    return (
        <div className="catalog">
            <div className="catalog-header">
                <input className='search' placeholder='search' />
                <span className='budget'>{ props.state.budget}</span>
            </div>
            <div className="catalogInfo">
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