import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import fetch from '../utils/fetch';

const CreatePost = () => {
    const [values, handleChange, cleanValues] = useForm({ title: "" })
    const [data, setData ] = useState({ data: "", errors: "", loading: false })

    const handleSubmit = async (event) => {
        event.preventDefault();
        setData({ ...data, loading: true })
        const rs = await fetch('post', 'http://posts.com/posts', { title: values.title })
        setData(rs);
        cleanValues()
    }

    return (
        <>
            { data.loading && <p>Cargando... </p>}
            { data.errors && <p>Error: { data.errors.message } </p> }
            <h1>Create a new Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Post title</label>
                    <input  type="text" 
                            className="form-control" 
                            id="title"
                            name="title"
                            aria-describedby="title"
                            value={values.title}
                            onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Post</button>
            </form>
        </>
    );
}

export default CreatePost