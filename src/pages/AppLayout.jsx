/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

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
