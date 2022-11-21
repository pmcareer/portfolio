import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import List from "./Common/List";

const Home = () => {
    const { data: skills, isLoading, isError} = useFetch('http://127.0.0.1:9001/api/products');
   
   
    useEffect(() => {
        
    }, []);


    return ( 
        <div className="row">
            <div className="col-12">
                { isLoading && <h1 className="text-center">Loading...</h1> }
                { skills &&
                <List data={skills} title="Skills" 
                // handleDelete={handleDelete} 
                // handleUpdate={handleUpdate} 
                // handleAdd={handleAdd} 
                />}
            </div>
        </div>
     );
}
 
export default Home;