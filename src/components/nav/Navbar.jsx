/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./navbar.css";
import Cta from "../buttons/Cta";

const SCREEN_SIZE = 820;

function Navbar({ mode }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(
		() => window.innerWidth < SCREEN_SIZE
	);

	let location = useLocation();

	function toggleMenu() {
		setIsOpen((isOpen) => !isOpen);
	}

	useEffect(() => {
		if (location.pathname) setIsOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		const handleResize = () => {
			setIsOpen(false);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isOpen]);

	useEffect(() => {
		window.addEventListener("resize", () =>
			setIsMobile(window.innerWidth < SCREEN_SIZE)
		);
	}, []);
	return (
		<nav className={`nav ${mode ? "fixedNav" : ""}`}>
			<section className="navContents">
				<Link to="/" className="brand">
					{" "}
					Travel<span>Tales</span>{" "}
				</Link>

				<ul className={`menu ${!isOpen ? "closeMenu" : ""}`}>
					<li>
						<NavLink className="navlink" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/app/destinations">
							Destinations
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/app/hotels">
							Hotels
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/app/flights">
							Flights
						</NavLink>
					</li>
				</ul>

				{!isMobile && <Cta>Book Now</Cta>}

				<Hamburger onToggleMenu={toggleMenu} isOpen={isOpen} />
			</section>
		</nav>
	);
}

export default Navbar;
