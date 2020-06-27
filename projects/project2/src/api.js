import { omdbApiKey } from './secrets'

const baseURL = `http://www.omdbapi.com/?apikey=${omdbApiKey}&`


export const getMovie = async imdbID => {
  const response = await fetch(baseURL + 'i=' + imdbID)
  const movie = await response.json()
  return movie
}

export const search = async (page, queryString) => {
  const response = await fetch(baseURL + 's=' + queryString + '&page=' + page)
  const search = await response.json()
  return (search && search.Response === "True") ? search : null
}
