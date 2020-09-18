import api from './api-config'

export const getAllGames = async () => {
  const resp = await api.get('/games')
  return resp.data
}

export const getAllUserGames = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/games`)
  return resp.data
}

export const getOneGame = async (id) => {
  const resp = await api.get(`/games/${id}`)
  return resp.data
}

export const putGame = async (id, formData) => {
  const resp = await api.put(`/games/${id}`, { game: formData })
  return resp.data
}

export const postGame = async (formData) => {
  const resp = await api.post('/games', { game: formData })
  return resp.data
}

export const deleteGame = async (id) => {
  const resp = await api.delete(`/games/${id}`)
  return resp.data
}
