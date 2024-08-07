import { useEffect, useState } from "react";
import { usePackages } from "../../../contexts/PackagesContext";
import Search from "../../search/Search";
import styles from "./FlightPackages.module.css";
import { GoFilter } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { IoBriefcase } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

// Helper function to compare values case-insensitively
const caseInsensitiveEquals = (a, b) => {
	if (typeof a === "string" && typeof b === "string") {
		return a.toLowerCase() === b.toLowerCase();
	}
	return a === b;
};

function FlightPackages() {
	const { packages, searchFlightBy, searchFlight } = usePackages();

	const [hasSearchQuery, setHasSearchQuery] = useState(
		() => Object.values(searchFlightBy).length > 0
	);
	const [filteredFlights, setFilteredFlights] = useState([]);

	const [isOpen, setIsOpen] = useState(false);
	const [showPackageDetails, setShowPackageDetails] = useState(false);
	const [selectedPackage, setSelectedPackage] = useState([]);

	// const hasSearchQuery = Object.values(searchFlightBy).length > 0;

	function handleFilterToggle() {
		setIsOpen(!isOpen);
	}
	function handleFilterByPackageType(packageType) {
		// const tour = tourPackages.filter(tourByPackage => tourByPackage.package_type === packageType);

		// setFilterTourPackages(tour);
		setIsOpen(false);
	}

	function handleFilterReset() {
		setFilteredFlights(packages.flights);

		searchFlight({});
		setHasSearchQuery(false);
	}
	function handleFilterByLowestPrice() {
		// const sortedItems = tourPackages.slice().sort((a, b) => a.price - b.price);

		// setFilterTourPackages(sortedItems)
		setIsOpen(false);
	}
	function handleFilterByHighestPrice() {
		// const sortedItems = tourPackages.slice().sort((a, b) => b.price - a.price);

		// setFilterTourPackages(sortedItems)
		setIsOpen(false);
	}
	function handleSelectedPackage(id) {
		const selected = filteredFlights.filter((item) => item.id === id);

		setShowPackageDetails(true);
		setSelectedPackage(selected);
		console.log(selected);

		// setFilterTourPackages(sortedItems)
		// setIsOpen(false);
	}

	// ! GET ALL FLIGHTS HERE
	// ! GET SEARCHBY OBJ
	// ! DIPLAY FILTEREDFILTER BY FIRST CHECKING IF THERE IS ANY SEARCH QUERY IF NOT DISPLAY ALL FLIGHTS

	useEffect(() => {
		setFilteredFlights(packages.flights);
		const hasNewQuery = Object.values(searchFlightBy).length > 0;

		if (hasNewQuery) {
			// filter function
			const filteredArray = packages.flights.filter((obj) => {
				return Object.entries(searchFlightBy).every(([key, value]) =>
					caseInsensitiveEquals(obj[key], value)
				);
			});
			setFilteredFlights(filteredArray);
			setHasSearchQuery(true);
		}

		console.log(hasSearchQuery, searchFlightBy);
	}, [searchFlightBy, packages.flights, hasSearchQuery]);
	// display flights
	// filter or search flights
	return (
		<section className={styles.flightpackages}>
			<Search page="flightPage" />

			<section className={styles.container}>
				{filteredFlights?.length !== 0 && (
					<header className={styles.header}>
						<h1>Available Flights</h1>

						<section className={styles.filterContainer}>
							<button className={styles.btn} onClick={handleFilterToggle}>
								<GoFilter />
								<span>Filter</span>
							</button>
							{isOpen && (
								<section className={styles.listContainer}>
									<ul className={styles.filterList}>
										<li>
											<button
												className={styles.btn}
												onClick={handleFilterReset}
											>
												All
											</button>
										</li>
										<li>
											<button
												className={styles.btn}
												onClick={handleFilterByLowestPrice}
											>
												<span>Price</span> <span>(low-high)</span>
											</button>
										</li>
										<li>
											<button
												className={styles.btn}
												onClick={handleFilterByHighestPrice}
											>
												<span>Price</span> <span>(high-low)</span>
											</button>
										</li>
										<li>
											<button
												className={styles.btn}
												// onClick={() =>
												// 	setIsPackageTypesOpen(!isPackageTypesOpen)
												// }
											>
												<span>package type</span>
											</button>
											{/* {isPackageTypesOpen && (
												<section className={styles.filterOptions}>
													{packageType.map((item, idx) => (
														<button
															onClick={() => handleFilterByPackageType(item)}
															key={idx}
														>
															{item}
														</button>
													))}
												</section>
											)} */}
										</li>
									</ul>
								</section>
							)}
						</section>
					</header>
				)}

				{hasSearchQuery && (
					<button onClick={handleFilterReset} className={styles.btn}>
						Back
					</button>
				)}

				<section className={styles.packageList}>
					{filteredFlights?.map((flight_package) => (
						<Link to={ `/app/flights/${flight_package.id}`}  key={flight_package.id}>
							<section
							
							className={`${styles.card} ${hasSearchQuery ? "card_size" : ""}`}
							onClick={() => handleSelectedPackage(flight_package.id)}
						>
							<section className={styles.card__header}>
								<img
									src={`/images/flights/${flight_package.image_url}`}
									alt=""
								/>

								<p>
									<span>Duration: </span>
									<span>{flight_package.duration}</span>
								</p>
							</section>
							<section className={styles.card__body}>
								<h1>
									<span>{flight_package.airline}</span>
								</h1>
								<ul>
									<li>
										<IoBriefcase />
										<p>
											class: <span>{flight_package.class}</span>
										</p>
									</li>
									<li>
										<CiLocationOn />
										<p>
											Destination: <span>{flight_package.arrival_city}</span>
										</p>
									</li>
									<li>
										<GiMoneyStack />
										<p>
											price:{" "}
											<span>
												₦{new Intl.NumberFormat().format(flight_package.price)}
											</span>
										</p>
									</li>
									<li>
										<MdAirlineSeatReclineNormal />
										<p>
											available seats:{" "}
											<span>{flight_package.available_seats}</span>
										</p>
									</li>
								</ul>
							</section>
						</section>
						</Link>
					))}
				</section>

			</section>
		</section>
	);
}

export default FlightPackages;
