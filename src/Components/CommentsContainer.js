import React from 'react'
import {commentsData, Comments} from './Comments'
// import CommentsData from './CommentsData'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
      <h1 className='text-2xl font-bold'>comments:</h1>
     <CommentsList comments={commentsData}/>

    </div>
  )
}

export default CommentsContainer
