import React, { useState, useEffect } from 'react'
import { getAllComments, postComment } from '../services/comments'

export default function Comments(props) {
  const [comments, setComments] = useState([])
  const { id, currentUser } = props
  const [formComment, setFormComment] = useState({
    content: '',
    game_id: id,
    user_id: currentUser.id,
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
    setFormComment((formComment) => {
      return { ...formComment, ...newComment }
    })
  }

  return (
    //   <div>
    //     {comments ? (
    //       <div>
    //         {comments
    //           .filter((comment) => comment.game_id === Number(id))
    //           .map((comment) => (
    //             <div>
    //               <h2> {comment.content}</h2>
    //             </div>
    //           ))}
    //       </div>
    //     ) : (
    //       <div>
    //         <h1>Be the first to Comment!</h1>
    //       </div>
    //     )}
    //   </div>
    // )
    <div>
      {comments ? (
        <div>
          <h1>Message Board</h1>
          {comments
            .filter((comment) => comment.game_id === Number(id))
            .map((comment) => (
              <div>
                <h2>{comment.content}</h2>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h1>Be the first to Comment!</h1>
        </div>
      )}

      {currentUser ? (
        <div>
          <h3>Add a comment</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              createCommentSubmit(formComment)
            }}
          >
            <label>
              <input
                type='textfield'
                name='content'
                placeholder='Comment'
                value={comment}
                onChange={handleChange}
              />
            </label>
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
/* <h3>Add a comment</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createCommentSubmit(formComment)
        }}
      >
        <label>
          <input
            type='textfield'
            name='content'
            placeholder='Comment'
            value={comment}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>

      {comments ? (
        <div>
          {comments
            .filter((comment) => comment.game_id === Number(id))
            .map((comment) => (
              <div>
                <h2>{comment.content}</h2>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h1>Be the first to Comment!</h1>
        </div>
      )}
    </div>
  ) */
//   <div>
//     <div>
//       {comments.filter((comment) =>
//         comment.game_id === Number(id) ? (
//           <div>
//             {comments.map((comment) => (
//               <div>
//                 <h2> {comment.content}</h2>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div>
//             <h1>Be the first to Comment!</h1>
//           </div>
//         )
//       )}
//     </div>
//   </div>
// )
