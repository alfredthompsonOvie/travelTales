import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import styles from './NotFound.module.css'

function NotFound() {
	return (
		<>
			<Navbar />
      <main className={styles.notFound}>
        <section className={styles.contents}>
          <h1>Page Not Found</h1>
        </section>
      </main>
			<Footer />
		</>
	);
}

export default NotFound;
