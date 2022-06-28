import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";
import axios from "axios";
import {API} from "../../../../constants/app";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {


    const categoryForm = useFormik({
        initialValues: {
            title: '',
            status: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title Is Required'),
            status: Yup.string().required('Status Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            axios.post(`${API}/categories`, values)
                .then(() => {
                    toast.success("Category Added Successfully");
                    resetForm({values: ''});
                    return getCategories();

                })
                .catch(({error}) => {
                    // categoryForm.setErrors();
                })
        }
    });

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const {data: data} = await axios.get(`${API}/categories`);
            setCategories(data.data)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`${API}/categories/${id}`);
            toast.success("Category Deleted Successfully");
            return getCategories();
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCategories();
    }, []);


    return (
        <>

            <div className="row mt-5">
                <ToastContainer />
                <div className="col-lg-4">
                    <CategoryForm categoryForm={categoryForm}/>
                </div>
                <div className="col-lg-8">
                    <CategoryList categories={categories}
                                  deleteCategory={deleteCategory}

                    />
                </div>

            </div>
        </>
    );
};

export default Category;