import React, { useState, useEffect } from 'react'
import fetch from '../utils/fetch'
import Post from './Post'

const PostList = () => {
    const [posts, setPosts] =  useState([]);

    useEffect(() => {
        (async () => {
            const rs = await fetch('get', 'http://posts.com/posts-comments');
            setPosts(rs.data);
        })()
    },[])

    return (
        <div className="mt-4">
            <h1>Post List</h1>
            { 
                (posts.length) ? 
                    <div className="row">
                        {posts.map(post => <Post key={post.id} post={post} />)}
                    </div> 
                : <div>No post published yet...</div> 
            }
        </div>
    )
}

export default PostList