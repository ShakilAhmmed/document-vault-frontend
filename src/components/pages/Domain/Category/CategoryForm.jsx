import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";

const CategoryForm = () => {

    const categoryForm = useFormik({
        initialValues: {
            name: '',
            status: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name Is Required'),
            status: Yup.string().required('Status Is Required'),
        }),
        onSubmit: values => {
            axios.post('')
                .then(({response}) => {

                })
                .catch(({error}) => {
                    // categoryForm.setErrors();
                })
        }
    });


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
                                   id="name"
                                   name="name"
                                   onChange={categoryForm.handleChange}
                                   onBlur={categoryForm.handleBlur}
                                   value={categoryForm.values.name}
                                   required/>
                            <div className="text-danger">
                                {
                                    categoryForm.touched.name &&
                                    categoryForm.errors.name &&
                                    (<div>{categoryForm.errors.name}</div>)
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