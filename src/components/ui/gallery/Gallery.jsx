/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import styles from "./Gallery.module.css";

function Gallery({ places, mode, imgPath, link }) {
	return (
		<section className={styles.topDestinations}>
			{places?.map((destination) => (
				<section className={styles.card} key={destination.id}>
					<section className={styles.card__img__container}>
						<img
							src={`${imgPath}/${destination.image_url}`}
							alt={`a picture of ${destination.name}`}
							className={styles.card__img}
						/>
					</section>
					{mode === "topDestinations" && (
						<section className={styles.card__body}>
							<p className={styles.card__header}>
								<span>{destination.rating} </span>
                <MdOutlineStar />
							</p>
							<footer>
								<section>
									<h1>{destination.name}</h1>
									<p className={styles.card__body__location}>
										<CiLocationOn /> {destination.location}
									</p>
								</section>
								<Link to={`${link}/${destination.id}`}>
									<GoPaperAirplane />
								</Link>
							</footer>
						</section>
					)}
				</section>
			))}

		</section>
	);
}

export default Gallery;
