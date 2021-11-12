import React from 'react';

const MakeAdmin = () => {
    return (
        <div className="admin-section container">
        <h2 className="text-center ">Make Admin</h2>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"> Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
              
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Admin Email" />
            </div>

            <button className="btn btn-outline-dark  mt-3">Submit</button>
        </form>
    </div>
    );
};

export default MakeAdmin;