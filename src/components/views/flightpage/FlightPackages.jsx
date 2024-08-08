import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GiMoneyStack } from "react-icons/gi";
import { IoBriefcase } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { usePackages } from "../../../contexts/PackagesContext";
import Search from "../../search/Search";
import Filter from "../../Filter/Filter";

import styles from "./FlightPackages.module.css";
import Message from "../../ui/message/Message";

// old version
// Helper function to compare values case-insensitively
// const caseInsensitiveEquals = (a, b) => {
// 	if (typeof a === "string" && typeof b === "string") {
// 		return a.toLowerCase() === b.toLowerCase();
// 	}
// 	return a === b;
// };

function FlightPackages() {
	const { packages, searchFlightWithQuery, deleteSearchQuery } = usePackages();
	const [hasSearchQuery, setHasSearchQuery] = useState(false);
	const [isBackButton, setIsBackButton] = useState(false);
	const [filteredFlights, setFilteredFlights] = useState([]);

	const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false); 
	const [isFilterByPackageTypesOpen, setIsFilterByPackageTypesOpen] = useState(false);

	// this sets the name of the type of filter eg all, package types, price(low) price(high)
	const [filterBy, setFilterBy] = useState("Filter");

	// here we create an array of on boarding class like business, economy, first class
	const packageType = packages.flights?.map((item) => item.service_tier)
		.reduce((arr, item) => {
			if (!arr.includes(item)) return [...arr, item];
			return arr;
		}, []);


	function handleFilterToggle() {
		setIsFilterOptionsOpen(!isFilterOptionsOpen);
		setIsFilterByPackageTypesOpen(false);
	}
	// for the flight class options like economy, business, first class
	function handleTogglePackageTypesOptions() {
		setIsFilterByPackageTypesOpen(!isFilterByPackageTypesOpen);
	}
	function handleFilterByPackageType(packageType) {
		const flights = packages.flights.filter(tourByPackage => tourByPackage.service_tier === packageType);

		setFilteredFlights(flights);
		setIsFilterOptionsOpen(false);
		setFilterBy("Package Type");
		setIsBackButton(false);
	}

	function handleFilterReset() {
		setFilteredFlights(packages.flights);
		setIsFilterOptionsOpen(false);
		setFilterBy("Filter");
		setHasSearchQuery(false);
		setIsBackButton(false);

	}

	function handleBackButtonReset() {
		handleFilterReset();
		setIsBackButton(false);
		deleteSearchQuery();
	}
	function handleFilterByLowestPrice() {
		const sortedFlights = packages.flights.slice().sort((a, b) => a.price - b.price);

		setFilteredFlights(sortedFlights);
		setIsFilterOptionsOpen(false);
		setFilterBy("Price (Low to High)");
		setIsBackButton(false);
		
	}
	function handleFilterByHighestPrice() {
		const sortedFlights = packages.flights.slice().sort((a, b) => b.price - a.price);

		setFilteredFlights(sortedFlights);
		setIsFilterOptionsOpen(false);
		setFilterBy("Price (High to Low)");
		setIsBackButton(false);
		
	}

	// old version
	// useEffect(() => {
	// 	setFilteredFlights(packages.flights);

	// 	const hasNewQuery = Object.values(searchFlightWithQuery).length > 0;

	// 	if (hasNewQuery) {
	// 		// filter function
	// 		console.log(searchFlightWithQuery)

	// 		const filteredArray = packages.flights.filter((obj) => {
	// 			return Object.entries(searchFlightWithQuery).every(([key, value]) =>
	// 				caseInsensitiveEquals(obj[key], value)
	// 			);
	// 		});
	// 		setFilteredFlights(filteredArray);
	// 		setIsBackButton(true);
	// 	}

	// }, [searchFlightWithQuery, packages.flights, hasSearchQuery]);


	useEffect(() => { 
		const containsAllProperties = (obj1, obj2) => {
			return Object.keys(obj1).every(key => obj2[key].toLowerCase() === obj1[key].toLowerCase());
		}

		const hasNewQuery = Object.values(searchFlightWithQuery).length > 0;

		if (hasNewQuery) {

			// filter the array; by checking if packages.flights has the properties from search query
			const filteredArray = packages.flights.filter(obj => containsAllProperties(searchFlightWithQuery, obj));

			setFilteredFlights(filteredArray);
			setIsBackButton(true);
			return;
		}

		setFilteredFlights(packages.flights)


	}, [searchFlightWithQuery, packages.flights, hasSearchQuery])

	

	return (
		<section className={styles.flightpackages}>
			<Search page="flightPage" />

			{filteredFlights?.length === 0 && <Message />}

			<section className={styles.container}>
				{filteredFlights?.length !== 0 && (
					<header className={styles.header}>
						<h1>Available Flights</h1>

						{/* FILTER COMPONENT */}
						<Filter
						packageType={packageType}
							filterBy={filterBy}
							
						toggleFilterOptions={isFilterOptionsOpen}
						togglePackageTypesOptions={isFilterByPackageTypesOpen}
						onHandleTogglePackageTypesOptions={handleTogglePackageTypesOptions}
						onHandleFilterToggle={handleFilterToggle}
						onHandleFilterReset={handleFilterReset}
						onHandleFilterByPackageType={handleFilterByPackageType}
						onHandleFilterByHighestPrice={handleFilterByHighestPrice}
						onHandleFilterByLowestPrice={handleFilterByLowestPrice}
					/>
						
					</header>
				)}

				{isBackButton && filteredFlights?.length !== 0 && (
					<button onClick={handleBackButtonReset} className={styles.btn}>
						Back
					</button>
				)}

				<section className={styles.packageList}>
					{filteredFlights?.map((flight_package) => (
						<Link
							to={`/app/flights/${flight_package.id}`}
							key={flight_package.id}
						>
							<section
								className={`${styles.card} ${
									filteredFlights?.length < 3 ? "card_size" : ""
								}`}
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
												class: <span>{flight_package.service_tier}</span>
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
													₦
													{new Intl.NumberFormat().format(flight_package.price)}
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
