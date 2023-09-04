import './styles.css'

export default function Movie ({id, title, img, rating}) {
    const API_IMG = process.env.REACT_APP_API_IMG

    return (
    <div key={id} className='movie'>
        <img src={`${API_IMG}${img}`} alt="movie poster">
        </img>
        <h1>{title}</h1>
        <p>Rating: <b>{rating}</b></p>
    </div>
    )
}