import { useEffect, useState } from "react"
export default function Movies(){
    const [movies, setMovies] = useState([])
    const API_IMG = process.env.REACT_APP_API_IMG
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
        }, [])

        
        return (
        <div>
        <ul>
            {movies.map(m => ( 
            <li key={m.id}>
                {m.original_title}
                <img src={`${API_IMG}${m.poster_path}`} width="200" height="250" alt="movie poster"
            >
                </img>
            </li>
            ))}
        </ul>
        </div>
    )
}
