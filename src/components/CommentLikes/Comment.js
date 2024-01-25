import React, { useState } from 'react'
import './Comment.css'

const Comment = (onComment) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onComment(comment);
        setComment('');
    };
  return (
    <div className='comment'>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Add a comment' />
        </form>
      
    </div>
  )
}

export default Comment
