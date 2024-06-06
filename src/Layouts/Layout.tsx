import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Backdrop from "../Components/Backdrop";
import Drawer from "../Components/Drawer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Drawer />
            <Backdrop />



            <Outlet />

            <Footer />
        </>
    )
};

export default Layout;