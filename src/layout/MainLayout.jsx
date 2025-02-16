import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="p-3">
            {/* Navbar  */}
            <Toaster />
            <Navbar />
            {/* Dynamic content  */}
            <div className="min-h-[calc(100vh_-_232px)] py-20 ">
                {/* Dynamic content  */}
                <Outlet />
            </div>
            {/* Footer  */}
            <Footer />
        </div>
    );
};

export default MainLayout;