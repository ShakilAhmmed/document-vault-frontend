import LeftBarTab from "./layouts/LeftBarTab";
import TopBar from "./layouts/TopBar";
import RightBar from "./layouts/RightBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import PrivateComponent from "./PrivateComponent";
import DocumentsList from "./pages/Domain/Documents/DocumentsList";
import AddDocument from "./pages/Domain/Documents/AddDocument";
import Category from "./pages/Domain/Category/Category";
import SharedDocumentList from "./pages/Domain/Documents/SharedDocumentList";

const Layout = () => {
    return (
        <>
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
                                <Route path="/shared" element={<SharedDocumentList/>}/>
                            </Routes>
                        </div>
                        <RightBar/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;