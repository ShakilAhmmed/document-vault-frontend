import LeftBarTab from "./layouts/LeftBarTab";
import TopBar from "./layouts/TopBar";
import RightBar from "./layouts/RightBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import {Routes, Route, useLocation} from "react-router-dom";
import Login from "./pages/Auth/Login";
import DocumentsList from "./pages/Domain/Documents/DocumentsList";
import AddDocument from "./pages/Domain/Documents/AddDocument";
import Category from "./pages/Domain/Category/Category";
import Register from "./pages/Auth/Register";

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
                                        <Route path="/categories" element={<Category/>}/>
                                        <Route path="/add-documents" element={<AddDocument/>}/>
                                        <Route path="/documents" element={<DocumentsList/>}/>
                                        <Route path="/" element={<Login/>}/>
                                        <Route path="/register" element={<Register/>}/>
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
