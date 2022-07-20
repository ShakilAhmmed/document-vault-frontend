import LeftBarTab from "./layouts/LeftBarTab";
import TopBar from "./layouts/TopBar";
import RightBar from "./layouts/RightBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import {Route, Routes, useLocation} from "react-router-dom";
import Login from "./pages/Auth/Login";
import DocumentsList from "./pages/Domain/Documents/DocumentsList";
import AddDocument from "./pages/Domain/Documents/AddDocument";
import Category from "./pages/Domain/Category/Category";
import Register from "./pages/Auth/Register";
import {useSelector} from "react-redux";
import PrivateComponent from "./PrivateComponent";

const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    let {pathname} = useLocation();

    return (
        <>
            {
                pathname == "/" && !isLoggedIn ? (<Login></Login>) : (

                    <div>
                        <LeftBarTab/>
                        <TopBar/>
                        <div className="page-wrapper">
                            <div className="page-content-tab">
                                <div className="container-fluid">
                                    <Routes>
                                        <Route path="/home" element={
                                            <PrivateComponent>
                                                <Home/>
                                            </PrivateComponent>
                                        }/>
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
