import {useState} from "react";
import Main from "./AppsMenu/Main";

const LeftBarTab = () => {

    const [mainMenu, setMainMenu] = useState(true);


    const handleMenuSwitch = () => {
        setMainMenu(true);
    }

    return (
        <>
            <div className="leftbar-tab-menu">
                <div className="main-icon-menu">
                    <a href="/" className="logo logo-metrica d-block text-center">
                        <span>
                          <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm"/>
                        </span>
                    </a>
                    <div className="main-icon-menu-body">
                        <div className="position-reletive h-100" data-simplebar style={{overflowX: 'hidden'}}>
                            <ul className="nav nav-tabs" role="tablist" id="tab-menu">
                                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Dashboard" data-bs-trigger="hover">
                                    <a onClick={handleMenuSwitch} id="dashboard-tab" className="nav-link">
                                        <i className="ti ti-smart-home menu-icon"/>
                                    </a>{/*end nav-link*/}
                                </li>
                                {/*end nav-item*/}
                                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Apps" data-bs-trigger="hover">
                                    <a href="#MetricaApps" id="apps-tab" className="nav-link">
                                        <i className="ti ti-apps menu-icon"/>
                                    </a>{/*end nav-link*/}
                                </li>
                                {/*end nav-item*/}
                                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Uikit" data-bs-trigger="hover">
                                    <a href="#MetricaUikit" id="uikit-tab" className="nav-link">
                                        <i className="ti ti-planet menu-icon"/>
                                    </a>{/*end nav-link*/}
                                </li>
                                {/*end nav-item*/}
                                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Pages" data-bs-trigger="hover">
                                    <a href="#MetricaPages" id="pages-tab" className="nav-link">
                                        <i className="ti ti-files menu-icon"/>
                                    </a>{/*end nav-link*/}
                                </li>
                                {/*end nav-item*/}
                                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Authentication" data-bs-trigger="hover">
                                    <a href="#MetricaAuthentication" id="authentication-tab" className="nav-link">
                                        <i className="ti ti-shield-lock menu-icon"/>
                                    </a>{/*end nav-link*/}
                                </li>
                                {/*end nav-item*/}
                            </ul>
                            {/*end nav*/}
                        </div>
                        {/*end /div*/}
                    </div>
                    {/*end main-icon-menu-body*/}
                    <div className="pro-metrica-end">
                        <a href="#" className="profile">
                            <img src="assets/images/users/user-4.jpg" alt="profile-user"
                                 className="rounded-circle thumb-sm"/>
                        </a>
                    </div>
                    {/*end pro-metrica-end*/}
                </div>
                {/*end main-icon-menu*/}
                <div className="main-menu-inner">
                    {/* LOGO */}
                    <div className="topbar-left">
                        <a href="/" className="logo">
          <span>
            <img src="assets/images/document.webp" style={{height: '55px'}} alt="logo-large"
                 className="logo-lg logo-dark"/>
             <span style={{
                 fontSize: '14px',
                 fontWeight: 'bold',
                 color: '#4d86b7'
             }}>Document Vault</span>
            <img src="assets/images/logo.png" alt="logo-large" className="logo-lg logo-light"/>
          </span>
                        </a>{/*end logo*/}
                    </div>
                    {mainMenu && (<Main/>)}
                </div>
                {/* end main-menu-inner*/}
            </div>
        </>
    );
};

export default LeftBarTab;