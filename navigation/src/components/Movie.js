import movieData from "../movieData.json"
import { useParams } from "react-router-dom"

function Movie() {
    // Unlike passing data via `props` in React when using `react-router-dom`
    // we need access to the URL's parameters to retrieve data
    const params = useParams()

    const movie = movieData.find(movie => movie.title === params.movieTitle)

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    )
}

export default Movie