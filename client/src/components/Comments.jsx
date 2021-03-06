import React, { useState, useEffect } from 'react'
import { getAllComments, postComment } from '../services/comments'
import '../css/Comments.css'

export default function Comments(props) {
  const [comments, setComments] = useState([])
  const { id, currentUser } = props
  const [formComment, setFormComment] = useState({
    content: '',
    game_id: id,
    user_id: '',
  })
  const { comment } = formComment

  const createCommentSubmit = async (formData) => {
    const newComment = await postComment(formData)
    setComments((prevState) => [...prevState, newComment])
  }
  console.log(currentUser)

  useEffect(() => {
    const fetchComments = async () => {
      const commentsArray = await getAllComments()
      console.log(commentsArray)
      setComments(commentsArray)
    }
    fetchComments()
  }, [])

  console.log(formComment)
  console.log(id)

  const handleChange = (e) => {
    const { name, value } = e.target
    const newComment = { [name]: value }
    formComment.user_id = currentUser.id
    setFormComment((formComment) => {
      return { ...formComment, ...newComment }
    })
  }

  return (
    <div className='comment-container'>
      {comments ? (
        <div className='messageboard'>
          <h2 className='messageboard-logo'>Message Board</h2>
          {comments
            .filter((comment) => comment.game_id === Number(id))
            .map((comment) => (
              <>
                <ul>
                  <li className='comments'>{comment.content}</li>
                </ul>
              </>
            ))}
        </div>
      ) : (
        <div>
          <h1>Be the first to Comment!</h1>
        </div>
      )}

      {currentUser ? (
        <div className='comment-add-container'>
          <h4 className='add-comment'>Add a comment</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              createCommentSubmit(formComment)
            }}
          >
            <label className='comment-form'>
              <textarea
                type='textarea'
                name='content'
                className='comment-type'
                placeholder='Comment'
                value={comment}
                onChange={handleChange}
              />
            </label>
            <button className='comment-submit'>Submit</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
