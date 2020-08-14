import React from 'react';
import CreatePost from './components/CreatePost'
import PostsList from './components/PostsList'

const App = () => {
    return (
        <div className="container mt-4">
            <CreatePost />
            <PostsList />
        </div>
    );
}

export default App