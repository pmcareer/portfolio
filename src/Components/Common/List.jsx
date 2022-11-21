const List = ({data, title, handleDelete,handleUpdate,handleAdd }) => {
    let addData = {id: 5, title:"Added", description: 'Added desc', date: "2017"}  ;
    return ( 
        <div className="row justify-content-center">     
            <div className="row my-2 justify-content-between">
                <div className="col-6"></div>
                <div className="col-6 text-end">
                    <button className=" bg-success text-white btn btn-sm"
                        onClick={() => handleAdd(addData)}
                        >
                            Add
                    </button>   
                </div>
            </div>
            {data.map((row, index) => (
                <div key={row.id}  className="col-md-4 col-11 mt-2 ">
                    <div className="card">
                        <div className="card-header">
                            <div className="row justify-content-between">
                                <div className="col-6">
                                    <p>{row.product_code}</p>
                                </div>
                                <div className="col-6 p-0 text-end">
                                    <button className="bg-danger text-white btn btn-sm"
                                    onClick={() => handleDelete(row.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-between">                               
                                <div className="col-12">                                    
                                    <div className="bg">
                                        <h3>{row.description}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-end">
                            <p>{row.created_at}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default List;