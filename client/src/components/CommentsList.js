import React from 'react'

const CommentsList = ({ comments }) => {
    return (
        <div className="mt-2 mb-2">
            { 
                <div>
                    {comments.map(comment =>
                        <div className="alert alert-primary" role="alert" key={comment.id}>
                            <strong>{comment.content}</strong>
                            <p className="small">Published at {new Date(comment.createdAt).toDateString()}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default CommentsList