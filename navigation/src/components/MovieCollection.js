import movieData from "../movieData.json"
import { Link } from "react-router-dom"

function MovieCollection() {    
    const movies = movieData.map(movie => {
        return (
            <Link to={`/movies/${movie.title}`} key={movie.title}>
                <p>{movie.title}</p>
            </Link>
        )
    })

    return (
        <div>
            <h1>All Movies</h1>
            {movies}
        </div>
    )
}

export default MovieCollection