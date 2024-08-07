import styles from './Hero.module.css'

function Hero() {
	return (
		<section className={styles.hero}>
			<section className={styles.illustration}>
				<img
					src="/hot-air-balloons.jpg"
					alt="hot air balloons"
					className={styles.hero__img}
				/>
			</section>
			<section className={styles.hero__contents}>
				<h1 className={styles.hero__title}>
					Discover A Beautiful <span>Place With Us</span>
				</h1>
				<p>
					Would you explore nature paradise in the world, find the best
					destination in the world with us
        </p>
      </section>      
		</section>
	);
}

export default Hero;
