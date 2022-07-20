import {useNavigate} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import {API} from "../../../constants/app";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../slices/authSlice";
import {useEffect} from "react";

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email Is Required'),
            password: Yup.string().required('Password Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            axios.post(`${API}/auth/login`, values)
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(login(response.data));
                    }
                    toast.success("Login Successfully");
                    resetForm({values: ''});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    });

    const handleLogIn = () => {
        loginForm.handleSubmit();
        navigate('/home', {replace: true})
    }

    const handleRegister = () => {
        navigate('/register', {replace: true})
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/home', {replace: true});
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <div className="container-md">
                <div className="row vh-100 d-flex justify-content-center">
                    <div className="col-12 align-self-center">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 mx-auto">
                                    <div className="card">
                                        <div className="card-body p-0 auth-header-box">
                                            <div className="text-center p-3">
                                                <a href="/" className="logo logo-admin">
                                                    <img src="assets/images/document.webp" height={50} alt="logo"
                                                         className="auth-logo"/>
                                                </a>
                                                <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Let's Get
                                                    Started Document Vault</h4>
                                                <p className="text-muted  mb-0">Sign in to continue to Document
                                                    Vault.</p>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="my-4"
                                                  action="https://mannatthemes.com/metrica/default/index.html">
                                                <div className="form-group mb-2">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email"
                                                           onChange={loginForm.handleChange}
                                                           onBlur={loginForm.handleBlur}
                                                           value={loginForm.values.email}
                                                           name="email" placeholder="Enter Your Email"/>
                                                    <div className="text-danger">
                                                        {
                                                            loginForm.touched.email &&
                                                            loginForm.errors.email &&
                                                            (<div>{loginForm.errors.email}</div>)
                                                        }
                                                    </div>
                                                </div>
                                                {/*end form-group*/}
                                                <div className="form-group">
                                                    <label className="form-label"
                                                           htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" name="password"
                                                           onChange={loginForm.handleChange}
                                                           onBlur={loginForm.handleBlur}
                                                           value={loginForm.values.password}
                                                           id="password" placeholder="Enter password"/>
                                                    <div className="text-danger">
                                                        {
                                                            loginForm.touched.password &&
                                                            loginForm.errors.password &&
                                                            (<div>{loginForm.errors.password}</div>)
                                                        }
                                                    </div>
                                                </div>
                                                {/*end form-group*/}
                                                <div className="form-group row mt-3">
                                                    <div className="col-sm-6">
                                                        <div className="form-check form-switch form-switch-success">
                                                            <input className="form-check-input" type="checkbox"
                                                                   id="customSwitchSuccess"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="customSwitchSuccess">Remember me</label>
                                                        </div>
                                                    </div>
                                                    {/*end col*/}
                                                    <div className="col-sm-6 text-end">
                                                        <a href="auth-recover-pw.html"
                                                           className="text-muted font-13"><i
                                                            className="dripicons-lock"/> Forgot password?</a>
                                                    </div>
                                                    {/*end col*/}
                                                </div>
                                                {/*end form-group*/}
                                                <div className="form-group mb-0 row">
                                                    <div className="col-12">
                                                        <div className="d-grid mt-3">
                                                            <button onClick={handleLogIn}
                                                                    className="btn btn-primary"
                                                                    type="button">Log In <i
                                                                className="fas fa-sign-in-alt ms-1"/></button>
                                                        </div>
                                                    </div>
                                                    {/*end col*/}
                                                </div>
                                                {/*end form-group*/}
                                            </form>
                                            {/*end form*/}
                                            <div className="m-3 text-center text-muted">
                                                <p className="mb-0">Don't have an account ? <a
                                                    onClick={handleRegister}
                                                    href="#"
                                                    className="text-primary ms-2">Free
                                                    Resister</a></p>
                                            </div>
                                            <hr className="hr-dashed mt-4"/>
                                            <div className="text-center mt-n5">
                                                <h6 className="card-bg px-3 my-4 d-inline-block">Or Login With</h6>
                                            </div>
                                        </div>
                                        {/*end card-body*/}
                                    </div>
                                    {/*end card*/}
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>

        </>
    );
};

export default Login;