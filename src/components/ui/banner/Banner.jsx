/* eslint-disable react/prop-types */
import styles from "./Banner.module.css";
function Banner({banner, bannerAlt, title }) {
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<section className={styles.img__container}>
					<img src={`/images/${banner}`} alt={bannerAlt} />
				</section>
				<section className={styles.header__description}>
					<h1>{ title }</h1>
				</section>
			</header>
		</section>
	);
}

export default Banner;
