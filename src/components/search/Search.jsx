/* eslint-disable react/prop-types */
// import { useHotels } from "../../contexts/HotelsContext";

import { useForm } from "react-hook-form";

import styles from "./Search.module.css";

// import { IoMdAirplane } from "react-icons/io";
// import { FaHotel } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";

// import { FaRegUser } from "react-icons/fa";

// import { IoCalendarNumberOutline } from "react-icons/io5";
// import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePackages } from "../../contexts/PackagesContext";

function Search({ page }) {
	const location = useLocation();
	const navigate = useNavigate();
	const { searchFlight } = usePackages();
	const { register, handleSubmit, reset } = useForm();
	// const { getCoords } = useHotels();

	//   Search & Book Cheap Flights
	// Book cheap and affordable local and international flight deals only on the Aspom Travel Website.
	// BOOK NOW

	//   Exciting Family Tour Packages On Budget
	// We have packages specially crafted for your family vacation needs. You can also request for a customized package that suites you.
	// SEE TOURS

	// ! search for flights and hotels

	// function handleSubmit(e) {
	// 	e.preventDefault();

	// 	console.log(location)

	// 	if (location.pathname !== "/app/flights") {
	// 		console.log("not in app/flights")
	// 		navigate("/app/flights");
	// 	}
	// }

	const onSubmit = (data) => {

		/*
		NOTE: The displayed date format will differ from the actual value — the displayed date is formatted based on the locale of the user's browser, but the parsed value is always formatted yyyy-mm-dd.
		*/ 
		// console.log(data);
		searchFlight(data);

		if (location.pathname !== "/app/flights") {
			console.log("not in app/flights");
			navigate("/app/flights");
		}

		reset();
	};

	return (
		<section
			className={`${styles.search__hero} ${
				page === "flightPage" ? "flightPage" : ""
			}`}
		>
			{/* <section className="search__tab">
				<button onClick={()=> setFormType("flights")}>
					<span className="icon">
						<IoMdAirplane />
					</span>
					<span>Flights</span>
				</button>
				<button onClick={()=> setFormType("hotels")}>
					<FaHotel />
					<span>Hotels</span>
				</button>
			</section> */}
			<section className={styles.formContainers}>
					<form
						className={styles.formContainers__form}
						onSubmit={handleSubmit(onSubmit)}
					>
						<section className={styles.form__control}>
							<label htmlFor="location">Location</label>
							<input
								type="text"
								id="destination"
								placeholder="where are you going?"
								{...register("arrival_city", {required: true})}
							/>
						</section>

						<section className={styles.form__control}>
							<label htmlFor="passengers">Passengers</label>
							<input
								type="number"
								id="passengers"
								placeholder="no. of travelers?"
								{...register("passengers")}
								
							/>
						</section>

						<section className={styles.form__control}>
							<label htmlFor="departure_date">Departure Date</label>
							<input type="date" id="departure_date" {...register("departure_date")}/>
						</section>

						<section className={styles.form__control}>
							<label htmlFor="return_date">Return Date</label>
							<input type="date" id="return_date" {...register("return_date")}/>
						</section>

						<section className={styles.SearchFormFooter}>
							<section className={styles.radioContainer}>
								<h1>Filter By:</h1>
								<section className={styles.radioFormGroups}>
									<section className={styles.form__group__radio}>
										<input
											type="radio"
											id="economy"
											value="economy"
											{...register('class')}
										/>
										<label htmlFor="economy">Economy</label>
									</section>
									<section className={styles.form__group__radio}>
										<input
											type="radio"
											id="premiumEconomy"
											value="premiumEconomy"
											{...register('class')}
										/>
										<label htmlFor="premiumEconomy">Premium Economy</label>
									</section>
									<section className={styles.form__group__radio}>
										<input
											type="radio"
											id="business"
											value="business"
											{...register('class')}
										/>
										<label htmlFor="business">Business</label>
									</section>
									<section className={styles.form__group__radio}>
										<input
											type="radio"
											id="firstClass"
											value="firstClass"
											{...register('class')}
										/>
										<label htmlFor="firstClass">First Class</label>
									</section>
								</section>
							</section>

							<button className={styles.searchFormSubmit}>Search</button>
						</section>
					</form>
			</section>
		</section>
	);
}

export default Search;
