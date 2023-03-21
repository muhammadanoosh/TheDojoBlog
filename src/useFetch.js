import { useEffect, useState } from "react";

useEffect

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    setData(data)
                    setIsPending(false)
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                    setError(null)
                })
        }, 1000);
    }, []);

    return { data, isPending, error }
}

export default useFetch;