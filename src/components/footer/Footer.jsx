import { NavLink } from "react-router-dom";
import Brand from "../brand/Brand";

import styles from "./Footer.module.css";
import Cta from "../buttons/Cta";

function Footer() {
	return (
		<footer className={styles.footer}>
			<section className={styles.footer__inner}>
				<section className={styles.footer__header}>
					<Brand />
					<p>
						Copyright &copy; 2024 TravelTales By Alfred Thompson Ovie. All
						Rights Reserved.
					</p>
				</section>
				<section className={styles.footer__body}>
					<section className={styles.footer__section}>
						<h1>Quick Links</h1>
						<ul className={styles.footer__navlist}>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/app/destinations">Destinations</NavLink>
							</li>
							<li>
								<NavLink to="/app/hotels">Hotels</NavLink>
							</li>
							<li>
								<NavLink to="/app/flights">Flights</NavLink>
							</li>
						</ul>
					</section>
					<section className={styles.footer__section}>
						<h1>Contact Info</h1>
						<ul className={styles.footer__navlist}>
							<li>
								<span>Plaza X, XY Floor, Street XYZ</span>
							</li>
							<li>
								<span>yourName@gmail.com</span>
							</li>
							<li>
								<span>+2348012345678</span>
							</li>
						</ul>
					</section>
					<section className={styles.footer__section}>
						<h1>Make a Reservation</h1>
						<section className={styles.footer__info}>
							<p>
								Our Support & Sales Team is available 24/7 to answer your
								queries.
							</p>
							<Cta>Book Now</Cta>
						</section>
					</section>
				</section>
			</section>
		</footer>
	);
}

export default Footer;
