import { useEffect, useState } from "react"
import { Search } from "../components/Search"
import { Preloader } from "../components/Preloader"
import { Movies } from "../components/Movies"
import { API_KEY } from "../constants/Apikey.constants"

export const Main = (): JSX.Element => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const searchMovies = (str: string, type: string = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err);
        setLoading(false)
      });
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err);
        setLoading(false)
      });
  }, [])

  return (
    <main className="container content">
      <Search searchMovies={searchMovies}/>
      {loading ? <Preloader/> : <Movies Search={movies}/>}
    </main>
  )
}