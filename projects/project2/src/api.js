import { omdbApiKey } from './secrets'

const baseURL = `http://www.omdbapi.com/?apikey=${omdbApiKey}&`


export const getMovie = async imdbID => {
  const response = await fetch(baseURL + 'i=' + imdbID)
  const movie = await response.json()
  return movie
}

export const search = async queryString => {
  const response = await fetch(baseURL + 's=' + queryString)
  const search = await response.json()
  console.log(search.Response)
  return (search && search.Response === "True") ? search : null
}
