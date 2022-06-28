const CategoryForm = (props) => {

    const {categoryForm} = props;


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Add Your Category</h4>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" noValidate onSubmit={categoryForm.handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Category</label>
                            <input type="text"
                                   className="form-control"
                                   id="title"
                                   name="title"
                                   onChange={categoryForm.handleChange}
                                   onBlur={categoryForm.handleBlur}
                                   value={categoryForm.values.title}
                                   required/>
                            <div className="text-danger">
                                {
                                    categoryForm.touched.title &&
                                    categoryForm.errors.title &&
                                    (<div>{categoryForm.errors.title}</div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select
                                className="form-control"
                                id="status"
                                name="status"
                                onChange={categoryForm.handleChange}
                                onBlur={categoryForm.handleBlur}
                                value={categoryForm.values.status}
                                required>
                                <option value=''>Select</option>
                                <option value={1}>Active</option>
                                <option value={2}>In-Active</option>
                            </select>
                            <div className="text-danger">
                                {
                                    categoryForm.touched.status &&
                                    categoryForm.errors.status &&
                                    (<div>{categoryForm.errors.status}</div>)
                                }
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CategoryForm;