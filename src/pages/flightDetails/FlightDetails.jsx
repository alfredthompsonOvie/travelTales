import { usePackages } from "../../contexts/PackagesContext";
import { useParams } from "react-router-dom";

import styles from "./FlightDetails.module.css";
import { MdFoodBank } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import BookingForm from "../../components/ui/bookingForm/BookingForm";
import BackButton from "../../components/buttons/backButton/BackButton";

function FlightDetails() {
	const { packages } = usePackages();
	const { id } = useParams();
	const packageID = parseInt(id);

	const selectedPackage = packages?.flights?.filter(
		(flight) => flight.id === packageID
	);

	return (
		<section>
			{selectedPackage && (
				<section className={styles.packageDetails}>
					<BackButton />

					<section className={styles.packageDetailsContent}>
						<section className={styles.packageImg}>
							<img
								src={`/images/flights/${selectedPackage[0].image_url}`}
								alt={`a picture of ${selectedPackage[0].airline}`}
							/>
						</section>

						<section className={styles.packageBody}>
							<header>
								<h1>{selectedPackage[0].airline}</h1>
								<section>
									<ul>
										<li>
											<span>
												{selectedPackage[0].booked
													? "You've Booked this Flight"
													: "Not Booked Yet"}
											</span>
										</li>
										<li>
											<p>
												<span>Flight Number: </span>
												<span>{selectedPackage[0].flight_number}</span>
											</p>
										</li>
										<li>
											<p>
												<span>Aircraft Type: </span>
												<span>{selectedPackage[0].aircraft_type}</span>
											</p>
										</li>
									</ul>
								</section>
							</header>

							<section className={styles.packageBodyDetails}>
								<ul>
									<li>
										<span>Price: </span>
										<span>
											₦
											{new Intl.NumberFormat().format(selectedPackage[0].price)}{" "}
										</span>
										{/* */}
									</li>
									<li>
										<span>Class: </span>
										<span>{selectedPackage[0].class}</span>
									</li>
									<li>
										<span>Number of seats: </span>
										<span>{selectedPackage[0].available_seats}</span>
									</li>
									<li>
										<span>Baggage Allowance: </span>
										<span>{selectedPackage[0].baggage_allowance}</span>
									</li>
								</ul>
								<ul>
									<li>
										<span>Departure City: </span>
										<span>
											{selectedPackage[0].departure_city} (
											{selectedPackage[0].departure_date})
										</span>
									</li>
									<li>
										<span>Arrival City: </span>
										<span>
											{selectedPackage[0].arrival_city} (
											{selectedPackage[0].arrival_date})
										</span>
									</li>

									<li>
										<span>Duration:</span>
										<span>{selectedPackage[0].duration}</span>
									</li>
								</ul>
							</section>

							<section className={styles.packageBodyDetails}>
								<ul>
									<li className={styles.ListItem}>Meals options</li>
									{selectedPackage[0].meal_options.map((item, idx) => (
										<li key={idx}>
											<MdFoodBank />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<ul>
									<li className={styles.ListItem}>Special Services</li>

									{selectedPackage[0].special_services.map((item, idx) => (
										<li key={idx}>
											<FaHandsHelping />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<ul>
									<li className={styles.ListItem}>Amenities</li>

									{selectedPackage[0].amenities.map((item, idx) => (
										<li key={idx}>
											<FaHandsHelping />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</section>

							<BookingForm packageName={selectedPackage[0].flight_number} />
						</section>
					</section>
				</section>
			)}
		</section>
	);
}

export default FlightDetails;
