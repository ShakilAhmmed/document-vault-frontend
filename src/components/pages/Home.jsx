const Home = () => {
    return (
        <>
            {/* Page-Title */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                    {/*end page-title-box*/}
                </div>
                {/*end col*/}
            </div>
            {/* end page title end breadcrumb */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-9">
                                            <p className="text-dark mb-0 fw-semibold">Total PDF</p>
                                            <h3 className="my-1 font-20 fw-bold">0</h3>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-3 align-self-center">
                                            <div
                                                className="d-flex justify-content-center align-items-center thumb-md bg-light-alt rounded-circle mx-auto">
                                                <i className="ti ti-users font-24 align-self-center text-muted"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>
                        {/*end col*/}
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-9">
                                            <p className="text-dark mb-0 fw-semibold">Total Category</p>
                                            <h3 className="my-1 font-20 fw-bold">0</h3>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-3 align-self-center">
                                            <div
                                                className="d-flex justify-content-center align-items-center thumb-md bg-light-alt rounded-circle mx-auto">
                                                <i className="ti ti-clock font-24 align-self-center text-muted"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>
                        {/*end col*/}
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-9">
                                            <p className="text-dark mb-0 fw-semibold">Total Document</p>
                                            <h3 className="my-1 font-20 fw-bold">0</h3>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-3 align-self-center">
                                            <div
                                                className="d-flex justify-content-center align-items-center thumb-md bg-light-alt rounded-circle mx-auto">
                                                <i className="ti ti-activity font-24 align-self-center text-muted"/>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>
                        {/*end col*/}
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-9">
                                            <p className="text-dark mb-0 fw-semibold">Share File</p>
                                            <h3 className="my-1 font-20 fw-bold">0</h3>
                                        </div>
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>
                        {/*end col*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;