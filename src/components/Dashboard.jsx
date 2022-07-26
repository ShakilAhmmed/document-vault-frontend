import {useLocation} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import {useSelector} from "react-redux";
import Layout from "./Layout";

const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    let {pathname} = useLocation();

    const renderElement = () => {
        if (pathname === "/register") {
            return <Register></Register>
        } else if (pathname === "/" && !isLoggedIn) {
            return <Login></Login>;
        } else {
            return <Layout></Layout>
        }
    }


    return (
        <>

            {
                renderElement()
            }

        </>
    );
};


export default Dashboard;
