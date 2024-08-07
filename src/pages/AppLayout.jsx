/* eslint-disable react/prop-types */
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";


function AppLayout() {
	return (
		<section className="layout">
			<Navbar />
			<Outlet />
			<Footer />
		</section>
	);
}

export default AppLayout;
