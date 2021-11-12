import React from 'react';

const AddProduct = () => {
    return (
        <div className="admin-section container">

                <h2 className="text-center ">Add Product</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" name="title" placeholder="product name" />
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Price</label>
                                <input  type="number" className="form-control" name="name" placeholder=" price" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"> Category</label>
                                    <select name="category" type="text" className="form-select">
                                        <option value="1">Amazing Spring</option>
                                        <option value="2">Home plants</option>                                                              
                                    </select>                              
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Product Image</label>
                        <input  type="file" className="form-control" placeholder="import image" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Short Description</label>
                        <textarea maxlength="250"  type="text" className="form-control" name="shortDis" placeholder=" short description" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <textarea  type="text" className="form-control" name="description" placeholder="description" />
                    </div>
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                </form>                 
    </div>
    );
};

export default AddProduct;