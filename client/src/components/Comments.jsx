import React, { useState, useEffect } from 'react'
import { getAllComments } from '../services/comments'

export default function Comments(props) {
  const [comments, setComments] = useState([])
  const { id } = props

  useEffect(() => {
    const fetchComments = async () => {
      const commentsArray = await getAllComments()
      setComments(commentsArray)
    }
    fetchComments()
  }, [])
  console.log(comments)
  console.log(id)

  return (
    <div>
      {comments.forEach((comment) => {
        console.log(comment)
        if (comment.game_id === id) {
          return (
            <div>
              <h2> {comment.content}</h2>
            </div>
          )
        } else {
          return <p>Be the first to comment!</p>
        }
      })}
    </div>
  )
}
