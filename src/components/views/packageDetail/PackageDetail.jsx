import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoChecklist } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import { usePackages } from "../../../contexts/PackagesContext";

import BookingForm from "../../ui/bookingForm/BookingForm";
import Testimonial from "../homepage/testimonial/Testimonial";
import BackButton from "../../buttons/backButton/BackButton";

import styles from "./PackageDetail.module.css";
import Rating from "../../ui/rating/Rating";

function PackageDetail() {
	const { packages, isLoading, setFavourite } = usePackages();
	const [data, setData] = useState({});
	const [testimonials, setTestimonials] = useState([]);

	const { type, id } = useParams();
	const path = packages[type]?.id?.isFav;

	function handleSetFavourite(category, id) {
		setFavourite(category,id);
	}


	useEffect(() => {
		const idd = Number(id);
		const dataArr = packages[type]?.filter(
			(item) => Number(item.id) === idd
		)[0];

		setData(dataArr);
		setTestimonials(dataArr?.reviews);
	}, [id, type,packages, path]);

	if (isLoading) return <p>Loading...</p>;

	return (
		<main className={styles.container}>
			<BackButton />
			<section className={styles.imgContainer}>
				<section className={styles.mainDisplay}>
					<img src={`/images/${type}/${data?.image_url}`} alt="" />

					<Rating rating={ data?.review_score_word } mode="details"/>
				</section>

				{data?.gallery?.map((img) => (
					<img
						key={img}
						src={`/images/${type}/${img}`}
						alt=""
						className={styles.gallery}
					/>
				))}
			</section>

			<section className={styles.containerContent}>
				<section className={styles.info}>
					<section>
						<header className={styles.header}>
							<section>
								<h1>
									<span>{data?.name} </span>/ <span>₦{new Intl.NumberFormat().format(data?.price) }</span>
								</h1>
								<p>{data?.location}</p>
							</section>
							<section>
								<button onClick={()=> handleSetFavourite(type, data.id)} className={styles.isFavorite}>
									{data?.isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
								</button>
							</section>
						</header>
						<section className={styles.overview}>
							<h1>Overview</h1>
							<p className={styles.description}>{data?.description}</p>
							{data?.timezone && (
								<section className={styles.additionalInfo}>
									<p>{data?.duration}</p>
									<p>{data?.timezone}</p>
									{data?.city?.map((item, idx) => (
										<p key={idx}>
											<FaLocationDot />
											<span>{item}</span>
										</p>
									))}
								</section>
							)}

							{data?.included && (
								<section className={styles.moreDetails}>
									<section className={styles.perks}>
										<section>
											<h1>Includes</h1>
											<ul className={styles.perksList}>
												{data?.included?.map((item, idx) => (
													<li key={idx}>
														<GiCheckMark />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</section>
										<section>
											<h1>HighLights</h1>
											<ul className={styles.perksList}>
												{data?.highlights?.map((item, idx) => (
													<li key={idx}>
														<GoChecklist />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</section>
									</section>
								</section>
							)}
						</section>
					</section>
				</section>
			</section>
			<section className={styles.packageFooter}>
				{!data?.description && (
					<Testimonial
						testimonials={testimonials}
						centered={false}
						detailspage={true}
					/>
				)}

				<BookingForm packageName={ data?.name} />
			</section>
		</main>
	);
}

export default PackageDetail;
