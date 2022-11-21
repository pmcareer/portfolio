import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const handleAdd = (data) => {
        setData(skills => ([...skills, data]));
    }
    const handleUpdate = (id) => {

    }
    const handleDelete = (id, filter) => {
        if (window.confirm("Delete this "+id) === true) {
            let newData = data.filter((data) => data.filter !== id);
            // let newData = data.filter((data) => data.filter !== id);
            setData(newData);
        } else {
        
        }
    }
    
    useEffect(() => {
        console.log("use effect")
        setIsLoading(true);
        fetch(url)
        .then(res => {
            if(!res.ok){
                console.log(res)
                throw Error("could not fetch the data for that resource")
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setTimeout(() => {
                setData(data);
                setIsLoading(false);    
            }, 500);            
        })
        .catch(e =>{
            console.log(e.message)
            setIsLoading(false);  
        })

    }, []);


    return {data, isLoading, error 
        // , handleAdd, handleDelete, handleUpdate
    }
}
 
export default useFetch;