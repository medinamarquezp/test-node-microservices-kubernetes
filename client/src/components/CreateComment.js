import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import fetch from '../utils/fetch';

const CreateComment = ({ postId }) => {
    const [values, handleChange, cleanValues] = useForm({ comment: "" })
    const [data, setData ] = useState({ data: "", errors: "", loading: false })

    const handleSubmit = async (event) => {
        event.preventDefault();
        setData({ ...data, loading: true })
        const rs = await fetch('post', 'http://posts.com/comments', { postId, content: values.comment })
        setData(rs);
        cleanValues();
    }

    return (
        <>
            { data.loading && <p>Cargando... </p>}
            { data.errors && <p>Error: { data.errors.message } </p> }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">New comment</label>
                    <input  type="text" 
                            className="form-control" 
                            id="comment"
                            name="comment"
                            aria-describedby="comment"
                            value={values.comment}
                            onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save comment</button>
            </form>
        </>
    );
}

export default CreateComment