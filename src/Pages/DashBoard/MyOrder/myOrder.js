import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {

    const category = [
        {
            name:"chips",
            category:"potetu chaips",
            code:"1245876",
            price:"432",
        },
        {
            name:"chips",
            category:"potetu chaips",
            code:"1245876",
            price:"432",
        },
        {
            name:"chips",
            category:"potetu chaips",
            code:"1245876",
            price:"432",
        }
    ]

    return (
        <div className="admin-section">

        <div className=" mt-3">
            <div className="d-flex">
                <h2>My Orders</h2>                              
            </div>
            <table className="table border shadow mt-3">
                <thead className="thead-dark bg-dark" style={{color:'white'}} >
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
                                <td>
                                <Link to="!#" className="btn bg-gray color-white me-2" >pending</Link>
                                    <Link to="!#" className="btn btn-danger me-2" >Cancel</Link>
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

export default MyOrder;