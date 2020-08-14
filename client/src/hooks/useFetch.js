import fetch from '../utils/fetch';
import { useEffect, useState } from 'react';
import useForm from './useForm';

const useFetch = async (method, url, data) => {
    const [response, setResponse] = useForm({ data: "", errors: "", loading: false })
    useEffect(() => {
        const rs = await fetch(method, url, data);
        setResponse(rs)
    }, [method, url, data])
    return response;
}

export default useFetch