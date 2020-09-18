import api from './api-config'

export const getAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data
}

export const postComment = async (formData) => {
  const resp = await api.post('/comments', { comment: formData })
  return resp.data
}
