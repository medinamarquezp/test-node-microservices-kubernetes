import React from 'react'
import CreateComment from './CreateComment'
import CommentsList from './CommentsList'

const Post = ({ post }) => {
    return (
        <div className="col-4 mt-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{ post.title }</h3>
                    <p className="small">Published at {new Date(post.createdAt).toDateString()}</p>
                </div>
                <div className="card-body">
                    <h5>Comments ({ post.comments.length })</h5>
                    { post.comments.length ? <CommentsList comments={post.comments} /> : '' }
                    <CreateComment postId={post.id} />
                </div>
            </div>
        </div>
    )
}

export default Post