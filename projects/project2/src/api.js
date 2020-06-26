import { omdbApiKey } from './secrets'


export const fetchMovieInfo = async (imdbID) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${imdbID}`)
  const results = await response.json()
  return results
}
