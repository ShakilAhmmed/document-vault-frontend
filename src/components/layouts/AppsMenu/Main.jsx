import {Link} from "react-router-dom";

const Main = () => {
    return (
        <>
            <div style={{marginLeft: '22px', marginTop: '75px'}}>
                <div className="main-icon-menu-pane tab-pane">
                    <div className="title-box">
                        <h6 className="menu-title">Dashboard</h6>
                    </div>
                    <ul className="nav flex-column">

                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-documents">Add Documents</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/documents">My Documents</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/shared">Shared Documents</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;