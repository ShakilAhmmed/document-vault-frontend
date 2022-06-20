import {FilePlus} from "react-feather";
import {useFormik} from "formik";
import * as Yup from "yup"

const AddDocument = () => {

    const documentForm = useFormik({
        initialValues: {
            title: '',
            category_id: '',
            file: '',
            file_type: '',
            upload_date: '',
            status: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title Is Required'),
            category_id: Yup.string().required('Category Is Required'),
            file: Yup.string().required('File Is Required'),
            file_type: Yup.string().required('Type Is Required'),
            upload_date: Yup.string().required('Date Is Required'),
            status: Yup.string().required('Status Is Required'),
        }),
        onSubmit: values => {
            console.log(values)
        }
    });

    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Add Your Documents</h4>
                        </div>
                        <div className="card-body">
                            <form className="row g-3 needs-validation" noValidate onSubmit={documentForm.handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text"
                                           className="form-control"
                                           id="title"
                                           name="title"
                                           onChange={documentForm.handleChange}
                                           onBlur={documentForm.handleBlur}
                                           value={documentForm.values.title}
                                           required/>
                                    <div className="text-danger">
                                        {
                                            documentForm.touched.title &&
                                            documentForm.errors.title &&
                                            (<div>{documentForm.errors.title}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <input type="text"
                                           className="form-control"
                                           id="category"
                                           name="category_id"
                                           onChange={documentForm.handleChange}
                                           onBlur={documentForm.handleBlur}
                                           value={documentForm.values.category_id}
                                           required/>
                                    <div className="text-danger">
                                        {
                                            documentForm.touched.category_id &&
                                            documentForm.errors.category_id &&
                                            (<div>{documentForm.errors.category_id}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="file" className="form-label">File</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">
                                        <FilePlus/>
                                        </span>
                                        <input type="file"
                                               className="form-control"
                                               id="file"
                                               onChange={event => {
                                                   documentForm.setFieldValue('file', event.currentTarget.files[0]);
                                               }}
                                               onBlur={documentForm.handleBlur}
                                               aria-describedby="inputGroupPrepend"
                                               required/>

                                    </div>
                                    <div className="text-danger">
                                        {
                                            documentForm.touched.file &&
                                            documentForm.errors.file &&
                                            (<div>{documentForm.errors.file}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="file_type" className="form-label">File Type</label>
                                    <input type="text"
                                           className="form-control"
                                           id="file_type"
                                           onChange={documentForm.handleChange}
                                           onBlur={documentForm.handleBlur}
                                           value={documentForm.values.file_type}
                                           required/>
                                    <div className="text-danger">
                                        {
                                            documentForm.touched.file_type &&
                                            documentForm.errors.file_type &&
                                            (<div>{documentForm.errors.file_type}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="upload_date" className="form-label">Upload Date</label>
                                    <input type="date"
                                           className="form-control"
                                           id="upload_date"
                                           onChange={documentForm.handleChange}
                                           onBlur={documentForm.handleBlur}
                                           value={documentForm.values.upload_date}
                                           required/>
                                    <div className="text-danger">
                                        {
                                            documentForm.touched.upload_date &&
                                            documentForm.errors.upload_date &&
                                            (<div>{documentForm.errors.upload_date}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom05" className="form-label">Status</label>
                                    <select
                                        className="form-control"
                                        id="status"
                                        name="status"
                                        onChange={documentForm.handleChange}
                                        onBlur={documentForm.handleBlur}
                                        value={documentForm.values.status}
                                        required>
                                        <option value=''>Select</option>
                                        <option value={1}>Active</option>
                                        <option value={2}>In-Active</option>
                                    </select>
                                    <div className="text-danger">
                                        {
                                            documentForm.touched.status &&
                                            documentForm.errors.status &&
                                            (<div>{documentForm.errors.status}</div>)
                                        }
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Upload</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddDocument;