import React, {useState, useEffect} from "react";

const useFetchFullData = (fetchFunction, dependency) => {
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFullData = async () =>{
            setLoading(true);
            setError(null);

            try{
                const result = await fetchFunction(dependency);
                setData(result)    
            } catch (err){
                setError(err.message)
            } finally{
                setLoading(false)
            }
        }
        if(dependency){
            fetchFullData();
        }
    }, [fetchFunction, dependency])

    return {data, loading, error}
}

export default useFetchFullData