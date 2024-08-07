/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import styles from "./Gallery.module.css";
import Rating from "../rating/Rating";

function Gallery({ places, mode, imgPath, link }) {
	return (
		<section className={styles.topDestinations}>
			{places?.map((destination) => (
				<Link to={`${link}/${destination.id}`} key={destination.id} className={styles.cardLink}>
					<section className={styles.card} >
						<section className={styles.card__img__container}>
							<img
								src={`${imgPath}/${destination.image_url}`}
								alt={`a picture of ${destination.name}`}
								className={styles.card__img}
							/>
						</section>
						{mode === "topDestinations" && (
							<section className={styles.card__body}>
								<Rating rating={destination.rating} />
								<footer>
									<section>
										<h1>{destination.name}</h1>
										<p className={styles.card__body__location}>
											<span>{destination.location}</span>
										</p>
									</section>
								</footer>
							</section>
						)}
					</section>
				</Link>
			))}
		</section>
	);
}

export default Gallery;
