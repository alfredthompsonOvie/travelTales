import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import styles from './NotFound.module.css'

function NotFound() {
	return (
		<>
			<Navbar />
      <main className={styles.notFound}>
        <section className={styles.contents}>
					<h1>Ooops</h1>
					<h2>Something went wrong!</h2>
					<p>The page you're looking for doesn't exist.</p>
					<p>The page you were looking for appears to have been moved, deleted or does not exist. You can go back to were you <span>were</span> or proceed to one of these pages.</p>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/app/destinations">Destinations</Link>
						</li>
						<li>
							<Link to="/app/hotels">Hotels</Link>
						</li>
						<li>
							<Link to="/app/flights">Flights</Link>
						</li>
					</ul>
        </section>
      </main>
			<Footer />
		</>
	);
}

export default NotFound;
