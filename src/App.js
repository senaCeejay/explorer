import { useState } from "react"
import BestPlace from "./components/BestPlace";
import Category from "./components/Category";
import FeatureExplorer from "./components/FeatureExplorer";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false)

    if (showModal) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
        setShowModal(!showModal)
    }
    return (
        <>
            <NavBar showSidebar={toggleSidebar} />
            <HeroSection />
            <Category />
            <FeatureExplorer />
            <BestPlace />
            <Footer />
            {showSidebar && <SideBar closeModal={toggleSidebar} />}
        </>
    );
}

export default App;
