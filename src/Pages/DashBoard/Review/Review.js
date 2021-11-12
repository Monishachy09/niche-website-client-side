import React from 'react';

const Review = () => {
    return (
        <div className="admin-section">
        <div className="  p-3">
                    <h2 className="text-center mb-4">Add Review</h2>
                    <form >

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Full Name"

                                    />
                                </div>                                                              
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Identity</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="ex. customer"

                                    />
                                </div>
                              
                            </div>
                        </div>
                                        
                        <div className="form-group mt-3">
                            <label> Image</label>
                            <input
                                type="file"
                                className="form-control form-control-lg"
                                placeholder="Import Your  Image"

                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Comment</label>
                            <textarea
                                row="4"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="write your comment"

                            />
                        </div>
                        <button className="btn btn-outline-dark  mt-3">Submit</button>
                    </form>
                </div>
    </div>
    );
};

export default Review;