import { useEffect, useState } from "react"
import Movie from "./Movie"
import './styles.css'

export default function MovieList(){
    const [movies, setMovies] = useState([])
    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
              Authorization: API_KEY
            }
        };
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(err => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        //disable console warning
        }, [])

        
        return (
        <div className="movie-list">
            {movies.map(movie => (
                    <Movie 
                        id={movie.id} 
                        name={movie.original_title}
                        title={movie.original_title}
                        img={movie.poster_path}
                        rating={movie.vote_average}
                    />
            ))}
        </div>
    )
}
