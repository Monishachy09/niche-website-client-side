import React from 'react';

const ManageOrder = () => {

    const category = [
        {
            name: "chips",
            category: "potetu chaips",
            code: "1245876",
            price: "432",
        },
        {
            name: "chips",
            category: "potetu chaips",
            code: "1245876",
            price: "432",
        },
        {
            name: "chips",
            category: "potetu chaips",
            code: "1245876",
            price: "432",
        }
    ]


    return (
        <div className="admin-section">

            <div className=" mt-3">
                <div className="d-flex">
                    <h2>Manage Orders</h2>
                </div>
                <table className="table border shadow mt-3">
                    <thead className="thead-dark bg-dark" style={{ color: 'white' }} >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">code</th>
                            <th scope="col">price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.slice(0, 5).map((pd, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{pd.name}</td>
                                    <td>{pd.category}</td>
                                    <td>{pd.code}</td>
                                    <td>{pd.price}</td>
                                    <td className="d-flex">
                                        
                                    <select class="form-select me-2" style={{maxWidth:'110px'}} >
                                                <option selected>status</option>
                                                <option value="1">Done</option>
                                                <option value="2">Pending</option>
                                                
                                            </select>
                                        {/* <Link to="!#" className="btn btn-danger me-2" >Delete</Link> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default ManageOrder;