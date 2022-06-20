import LeftBarTab from "./layouts/LeftBarTab";
import TopBar from "./layouts/TopBar";
import RightBar from "./layouts/RightBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import {Routes, Route, useLocation} from "react-router-dom";
import Login from "./pages/Auth/Login";
import DocumentsList from "./pages/Domain/Documents/DocumentsList";


const Dashboard = () => {

    let {pathname} = useLocation();

    return (
        <>
            {
                pathname == "/" ? (<Login></Login>) : (
                    <div>
                        <LeftBarTab/>
                        <TopBar/>
                        <div className="page-wrapper">
                            <div className="page-content-tab">
                                <div className="container-fluid">
                                    <Routes>
                                        <Route path="/home" element={<Home/>}/>
                                        <Route path="/add-documents" element={<Home/>}/>
                                        <Route path="/documents" element={<DocumentsList/>}/>
                                        <Route path="/" element={<Login/>}/>
                                    </Routes>
                                </div>
                                <RightBar/>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
};


export default Dashboard;