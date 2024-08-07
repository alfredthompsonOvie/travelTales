// import Cta from "../../button/Cta";
import "./hero.css";
function Hero() {
	return (
		<section className="hero">
			<section className="illustration">
				<img
					src="/hot-air-balloons.jpg"
					alt="hot air balloons"
					className="hero__img"
				/>
			</section>
			<section className="hero__contents">
				<h1 className="hero__title">
					Discover A Beautiful <span>Place With Us</span>
				</h1>
				<p>
					Would you explore nature paradise in the world, find the best
					destination in the world with us
        </p>
        {/* <Cta>Book Now</Cta> */}
      </section>      
		</section>
	);
}

export default Hero;
