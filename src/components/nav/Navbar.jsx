/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import Brand from "../links/brand/Brand";
import Cta from "../links/cta/Cta";

import styles from './Navbar.module.css'


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
		<nav className={`${styles.nav} ${mode ? "fixedNav" : ""}`}>
			<section className={styles.navContents}>
				<Brand />

				<ul className={`${styles.menu} ${!isOpen ? "closeMenu" : ""}`}>
					<li>
						<NavLink className={styles.navlink} to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to="/app/destinations">
							Destinations
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to="/app/hotels">
							Hotels
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.navlink} to="/app/flights">
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
