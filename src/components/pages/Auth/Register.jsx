import {useNavigate} from "react-router-dom";

const Register = () => {

    let navigate = useNavigate();

    const handRegistration = () => {
        navigate('/', {replace: true})
    }


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
                                                <a href="index.html" className="logo logo-admin">
                                                    <img src="assets/images/document.webp" height={50} alt="logo"
                                                         className="auth-logo"/>
                                                </a>
                                                <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Let's Get
                                                    Started Document Vault</h4>
                                                <p className="text-muted  mb-0">Sign Up to continue to Document
                                                    Vault.</p>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="my-4"
                                                  action="https://mannatthemes.com/metrica/default/index.html">
                                                <div className="form-group mb-2">
                                                    <label className="form-label" htmlFor="username">NID</label>
                                                    <input type="text" className="form-control" id="nid"
                                                           name="username" placeholder="Enter Your NID"/>
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label className="form-label" htmlFor="username">Name</label>
                                                    <input type="text" className="form-control" id="nid"
                                                           name="username" placeholder="Enter Your Name"/>
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label className="form-label" htmlFor="username">Email</label>
                                                    <input type="text" className="form-control" id="nid"
                                                           name="username" placeholder="Enter Your Email"/>
                                                </div>

                                                {/*end form-group*/}
                                                <div className="form-group">
                                                    <label className="form-label"
                                                           htmlFor="userpassword">Password</label>
                                                    <input type="password" className="form-control" name="password"
                                                           id="userpassword" placeholder="Enter password"/>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label"
                                                           htmlFor="userpassword">Confirm Password</label>
                                                    <input type="password" className="form-control" name="password"
                                                           id="userpassword" placeholder="Enter Confirm password"/>
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
                                                        <a href="auth-recover-pw.html" className="text-muted font-13"><i
                                                            className="dripicons-lock"/> Forgot password?</a>
                                                    </div>
                                                    {/*end col*/}
                                                </div>
                                                {/*end form-group*/}
                                                <div className="form-group mb-0 row">
                                                    <div className="col-12">
                                                        <div className="d-grid mt-3">
                                                            <button onClick={handRegistration} className="btn btn-primary"
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
                                                <p className="mb-0">Don't have an account ? <a href="auth-register.html"
                                                                                               className="text-primary ms-2">Free
                                                    Resister</a></p>
                                            </div>
                                            <hr className="hr-dashed mt-4"/>
                                            <div className="text-center mt-n5">
                                                <h6 className="card-bg px-3 my-4 d-inline-block">Or Login With</h6>
                                            </div>
                                            {/* <div className="d-flex justify-content-center mb-1">
                                                <a href="#" className="d-flex justify-content-center align-items-center thumb-sm bg-soft-primary rounded-circle me-2">
                                                    <i className="fab fa-facebook align-self-center"/>
                                                </a>
                                                <a href="#" className="d-flex justify-content-center align-items-center thumb-sm bg-soft-info rounded-circle me-2">
                                                    <i className="fab fa-twitter align-self-center"/>
                                                </a>
                                                <a href="#" className="d-flex justify-content-center align-items-center thumb-sm bg-soft-danger rounded-circle">
                                                    <i className="fab fa-google align-self-center"/>
                                                </a>
                                            </div> */}
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

}

export default Register;