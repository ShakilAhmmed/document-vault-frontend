const Home = () => {
    return (
        <>
            {/* Page-Title */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Metrica</a>
                                </li>
                                {/*end nav-item*/}
                                <li className="breadcrumb-item"><a href="#">Dashboard</a>
                                </li>
                                {/*end nav-item*/}
                                <li className="breadcrumb-item active">Analytics</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Analytics</h4>
                    </div>
                    {/*end page-title-box*/}
                </div>
                {/*end col*/}
            </div>
            {/* end page title end breadcrumb */}
            <div className="row">
                <div className="col-lg-9">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-9">
                                            <p className="text-dark mb-0 fw-semibold">Sessions</p>
                                            <h3 className="my-1 font-20 fw-bold">24k</h3>
                                            <p className="mb-0 text-truncate text-muted"><span
                                                className="text-success"><i
                                                className="mdi mdi-trending-up"/>8.5%</span> New
                                                Sessions Today</p>
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
                                            <p className="text-dark mb-0 fw-semibold">Avg.Sessions</p>
                                            <h3 className="my-1 font-20 fw-bold">00:18</h3>
                                            <p className="mb-0 text-truncate text-muted"><span
                                                className="text-success"><i
                                                className="mdi mdi-trending-up"/>1.5%</span> Weekly
                                                Avg.Sessions</p>
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
                                            <p className="text-dark mb-0 fw-semibold">Bounce Rate</p>
                                            <h3 className="my-1 font-20 fw-bold">$2400</h3>
                                            <p className="mb-0 text-truncate text-muted"><span
                                                className="text-danger"><i
                                                className="mdi mdi-trending-down"/>35%</span> Bounce
                                                Rate Weekly</p>
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
                                            <p className="text-dark mb-0 fw-semibold">Goal
                                                Completions</p>
                                            <h3 className="my-1 font-20 fw-bold">85000</h3>
                                            <p className="mb-0 text-truncate text-muted"><span
                                                className="text-success"><i
                                                className="mdi mdi-trending-up"/>10.5%</span> Completions
                                                Weekly</p>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-3 align-self-center">
                                            <div
                                                className="d-flex justify-content-center align-items-center thumb-md bg-light-alt rounded-circle mx-auto">
                                                <i className="ti ti-confetti font-24 align-self-center text-muted"/>
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
                    </div>
                    {/*end row*/}
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Audience Overview</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#"
                                           className="btn btn-sm btn-outline-light dropdown-toggle"
                                           data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            This Year<i className="las la-angle-down ms-1"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Last Week</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                            <a className="dropdown-item" href="#">This Year</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className>
                                <div id="ana_dash_1" className="apex-charts"/>
                            </div>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Sessions Device</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#"
                                           className="btn btn-sm btn-outline-light dropdown-toggle"
                                           data-bs-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            All<i className="las la-angle-down ms-1"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Purchases</a>
                                            <a className="dropdown-item" href="#">Emails</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="text-center">
                                <div id="ana_device" className="apex-charts"/>
                                <h6 className="bg-light-alt py-3 px-2 mb-0">
                                    <i data-feather="calendar"
                                       className="align-self-center icon-xs me-1"/>
                                    01 January 2020 to 31 December 2020
                                </h6>
                            </div>
                            <div className="table-responsive mt-2">
                                <table className="table border-dashed mb-0">
                                    <thead>
                                    <tr>
                                        <th>Device</th>
                                        <th className="text-end">Sassions</th>
                                        <th className="text-end">Day</th>
                                        <th className="text-end">Week</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Dasktops</td>
                                        <td className="text-end">1843</td>
                                        <td className="text-end">-3</td>
                                        <td className="text-end">-12</td>
                                    </tr>
                                    <tr>
                                        <td>Tablets</td>
                                        <td className="text-end">2543</td>
                                        <td className="text-end">-5</td>
                                        <td className="text-end">-2</td>
                                    </tr>
                                    <tr>
                                        <td>Mobiles</td>
                                        <td className="text-end">3654</td>
                                        <td className="text-end">-5</td>
                                        <td className="text-end">-6</td>
                                    </tr>
                                    </tbody>
                                </table>
                                {/*end /table*/}
                            </div>
                            {/*end /div*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Live Visits Our New Site</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#"
                                           className="btn btn-sm btn-outline-light dropdown-toggle"
                                           data-bs-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Today<i className="las la-angle-down ms-1"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Yesterday</a>
                                            <a className="dropdown-item" href="#">Last Week</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div id="circlechart" className="apex-charts"/>
                            <div>
                                <div className="row">
                                    <div className="col-lg">
                                        <h4 className="card-title mt-0 mb-2">Traffic Sources</h4>
                                        <div className="traffic-card">
                                            <h4 className="my-2">80</h4>
                                            <p className="mb-2 fw-semibold">Right Now</p>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-lg-auto align-self-center">
                                        <ul className="list-unstyled url-list mb-0">
                                            <li>
                                                <i className="fas fa-caret-right font-16 text-primary"/>
                                                <span>Organic</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-caret-right font-16 text-success"/>
                                                <span>Direct</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-caret-right font-16 text-gray"/>
                                                <span>Campaign</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                <div className="progress">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                        role="progressbar" style={{width: '55%'}} aria-valuenow={55}
                                        aria-valuemin={0} aria-valuemax={100}>55%
                                    </div>
                                    <div className="progress-bar bg-info" role="progressbar"
                                         style={{width: '28%'}} aria-valuenow={28} aria-valuemin={0}
                                         aria-valuemax={100}>28%
                                    </div>
                                    <div className="progress-bar bg-soft-secondary" role="progressbar"
                                         style={{width: '17%'}} aria-valuenow={17} aria-valuemin={0}
                                         aria-valuemax={100}>17%
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Pages View by Users</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#"
                                           className="btn btn-sm btn-outline-light dropdown-toggle"
                                           data-bs-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Today<i className="las la-angle-down ms-1"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Yesterday</a>
                                            <a className="dropdown-item" href="#">Last Week</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <ul className="list-group custom-list-group">
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/rgb.svg" height={30}
                                             className="me-3 align-self-center rounded" alt="..."/>
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Dastone - Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">analytic-index.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">4.3k <i
                                            className="las la-external-link-alt font-15"/></a>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/cobweb.svg" height={30}
                                             className="me-3 align-self-center rounded" alt="..."/>
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Metrica Simple- Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">sales-index.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">3.7k <i
                                            className="las la-external-link-alt font-15"/></a>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/blocks.svg" height={30}
                                             className="me-3 align-self-center rounded" alt="..."/>
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Crovex - Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">helpdesk-index.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">2.9k <i
                                            className="las la-external-link-alt font-15"/></a>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/atom.svg" height={30}
                                             className="me-3 align-self-center rounded" alt="..."/>
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Annex - Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">calendar.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">1.6k <i
                                            className="las la-external-link-alt font-15"/></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h2 className="m-0 align-self-center">80</h2>
                                <div className="d-block ms-2 align-self-center">
                                    <span className="text-warning">Right now</span>
                                    <h5 className="my-1">Traffic Sources</h5>
                                    <p className="mb-0 text-muted">It is a long established fact that a
                                        reader will
                                        be of a page when looking at its layout.
                                        <a href="#" className="text-primary">Read More <i
                                            className="las la-arrow-right"/></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Activity</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#"
                                           className="btn btn-sm btn-outline-light dropdown-toggle"
                                           data-bs-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            All<i className="las la-angle-down ms-1"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Purchases</a>
                                            <a className="dropdown-item" href="#">Emails</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-bodyp-0">
                            <div className="p-3" data-simplebar style={{height: 390}}>
                                <div className="activity">
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="las la-user-clock bg-soft-primary"/>
                                        </div>
                                        <div className="activity-info-text">
                                            <div
                                                className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75">
                                                    <span>Donald</span>
                                                    updated the status of <a href="#">Refund
                                                    #1234</a> to awaiting customer response
                                                </p>
                                                <small className="text-muted">10 Min ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="mdi mdi-timer-off bg-soft-primary"/>
                                        </div>
                                        <div className="activity-info-text">
                                            <div
                                                className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Lucy Peterson</span>
                                                    was added to the group, group name is <a
                                                        href="#">Overtake</a>
                                                </p>
                                                <small className="text-muted">50 Min ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <img src="assets/images/users/user-5.jpg" alt="not found"
                                                 className="rounded-circle thumb-sm"/>
                                        </div>
                                        <div className="activity-info-text">
                                            <div
                                                className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Joseph Rust</span>
                                                    opened new showcase <a href="#">Mannat
                                                        #112233</a> with theme market
                                                </p>
                                                <small className="text-muted">10 hours ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="mdi mdi-clock-outline bg-soft-primary"/>
                                        </div>
                                        <div className="activity-info-text">
                                            <div
                                                className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75">
                                                    <span>Donald</span>
                                                    updated the status of <a href="#">Refund
                                                    #1234</a> to awaiting customer response
                                                </p>
                                                <small className="text-muted">Yesterday</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="mdi mdi-alert-outline bg-soft-primary"/>
                                        </div>
                                        <div className="activity-info-text">
                                            <div
                                                className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Lucy Peterson</span>
                                                    was added to the group, group name is <a
                                                        href="#">Overtake</a>
                                                </p>
                                                <small className="text-muted">14 Nov 2019</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <img src="assets/images/users/user-4.jpg" alt="not found"
                                                 className="rounded-circle thumb-sm"/>
                                        </div>
                                        <div className="activity-info-text">
                                            <div
                                                className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Joseph Rust</span>
                                                    opened new showcase <a href="#">Mannat
                                                        #112233</a> with theme market
                                                </p>
                                                <small className="text-muted">15 Nov 2019</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*end activity*/}
                            </div>
                            {/*end analytics-dash-activity*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Browser Used &amp; Traffic Reports</h4>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="table-responsive browser_users">
                                <table className="table mb-0">
                                    <thead className="thead-light">
                                    <tr>
                                        <th className="border-top-0">Channel</th>
                                        <th className="border-top-0">Sessions</th>
                                        <th className="border-top-0">Prev.Period</th>
                                        <th className="border-top-0">% Change</th>
                                    </tr>
                                    {/*end tr*/}
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><a href="#" className="text-primary">Organic search</a></td>
                                        <td>10853<small className="text-muted">(52%)</small></td>
                                        <td>566<small className="text-muted">(92%)</small></td>
                                        <td> 52.80% <i
                                            className="fas fa-caret-up text-success font-16"/></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><a href="#" className="text-primary">Direct</a></td>
                                        <td>2545<small className="text-muted">(47%)</small></td>
                                        <td>498<small className="text-muted">(81%)</small></td>
                                        <td> -17.20% <i
                                            className="fas fa-caret-down text-danger font-16"/></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><a href="#" className="text-primary">Referal</a></td>
                                        <td>1836<small className="text-muted">(38%)</small></td>
                                        <td>455<small className="text-muted">(74%)</small></td>
                                        <td> 41.12% <i
                                            className="fas fa-caret-up text-success font-16"/></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><a href="#" className="text-primary">Email</a></td>
                                        <td>1958<small className="text-muted">(31%)</small></td>
                                        <td>361<small className="text-muted">(61%)</small></td>
                                        <td> -8.24% <i
                                            className="fas fa-caret-down text-danger font-16"/></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><a href="#" className="text-primary">Social</a></td>
                                        <td>1566<small className="text-muted">(26%)</small></td>
                                        <td>299<small className="text-muted">(49%)</small></td>
                                        <td> 29.33% <i className="fas fa-caret-up text-success"/></td>
                                    </tr>
                                    {/*end tr*/}
                                    </tbody>
                                </table>
                                {/*end table*/}
                            </div>
                            {/*end /div*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Browser Used &amp; Traffic Reports</h4>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="table-responsive browser_users">
                                <table className="table mb-0">
                                    <thead className="thead-light">
                                    <tr>
                                        <th className="border-top-0">Browser</th>
                                        <th className="border-top-0">Sessions</th>
                                        <th className="border-top-0">Bounce Rate</th>
                                        <th className="border-top-0">Transactions</th>
                                    </tr>
                                    {/*end tr*/}
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><img src="assets/images/logos/chrome.png" alt="not found"
                                                 height={16}
                                                 className="me-2"/>Chrome
                                        </td>
                                        <td>10853<small className="text-muted">(52%)</small></td>
                                        <td> 52.80%</td>
                                        <td>566<small className="text-muted">(92%)</small></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><img src="assets/images/logos/micro-edge.png"
                                                 alt="not found"
                                                 height={16} className="me-2"/>Microsoft Edge
                                        </td>
                                        <td>2545<small className="text-muted">(47%)</small></td>
                                        <td> 47.54%</td>
                                        <td>498<small className="text-muted">(81%)</small></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><img src="assets/images/logos/in-explorer.png"
                                                 alt="not found"
                                                 height={16} className="me-2"/>Internet-Explorer
                                        </td>
                                        <td>1836<small className="text-muted">(38%)</small></td>
                                        <td> 41.12%</td>
                                        <td>455<small className="text-muted">(74%)</small></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><img src="assets/images/logos/opera.png" alt="not found"
                                                 height={16}
                                                 className="me-2"/>Opera
                                        </td>
                                        <td>1958<small className="text-muted">(31%)</small></td>
                                        <td> 36.82%</td>
                                        <td>361<small className="text-muted">(61%)</small></td>
                                    </tr>
                                    {/*end tr*/}
                                    <tr>
                                        <td><img src="assets/images/logos/chrome.png" alt="not found"
                                                 height={16}
                                                 className="me-2"/>Chrome
                                        </td>
                                        <td>10853<small className="text-muted">(52%)</small></td>
                                        <td> 52.80%</td>
                                        <td>566<small className="text-muted">(92%)</small></td>
                                    </tr>
                                    {/*end tr*/}
                                    </tbody>
                                </table>
                                {/*end table*/}
                            </div>
                            {/*end /div*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
        </>
    );
};

export default Home;