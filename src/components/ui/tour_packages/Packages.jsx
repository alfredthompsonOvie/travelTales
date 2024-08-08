/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";

import Rating from "../rating/Rating";
import Filter from "../../Filter/Filter";
import styles from "./Packages.module.css";

function PackageList({ tourPackages, title, imgPath, link }) {
	const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false); 
	const [isFilterByPackageTypesOpen, setIsFilterByPackageTypesOpen] = useState(false);
	// this sets the name of the type of filter eg all, package types, price(low) price(high)
	const [filterBy, setFilterBy] = useState("Filter");

	const [FilterTourPackages, setFilterTourPackages] = useState([]);

	// const packageType = tourPackages?.map((item) => item.package_type);
	const packageType = tourPackages?.map((item) => item.package_type)
	.reduce((arr, item) => {
		if (!arr.includes(item)) return [...arr, item];
		return arr;
	}, []);



	function handleFilterToggle() {
		setIsFilterOptionsOpen(!isFilterOptionsOpen);
		setIsFilterByPackageTypesOpen(false);
	}
	function handleTogglePackageTypesOptions() {
		setIsFilterByPackageTypesOpen(!isFilterByPackageTypesOpen);
	}
	function handleFilterByPackageType(packageType) {
		const tour = tourPackages.filter(
			(tourByPackage) => tourByPackage.package_type === packageType
		);

		setFilterTourPackages(tour);
		setIsFilterOptionsOpen(false);
		setFilterBy("Package Type");
	}

	function handleFilterReset() {
		setFilterTourPackages(tourPackages);
		setIsFilterOptionsOpen(false);
		setFilterBy("Filter");
	}
	function handleFilterByLowestPrice() {
		const sortedItems = tourPackages.slice().sort((a, b) => a.price - b.price);

		setFilterTourPackages(sortedItems);
		setIsFilterOptionsOpen(false);
		setFilterBy("Price (Low to High)");
	}
	function handleFilterByHighestPrice() {
		const sortedItems = tourPackages.slice().sort((a, b) => b.price - a.price);

		setFilterTourPackages(sortedItems);
		setIsFilterOptionsOpen(false);
		setFilterBy("Price (High to Low)");
	}


	useEffect(() => {

		setFilterTourPackages(tourPackages);
	}, [tourPackages]);

	return (
		<section className={styles.container}>
			{FilterTourPackages?.length !== 0 && (
				<header className={styles.header}>
					<h1>Popular {title}</h1>

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

			<section className={styles.packageList}>
				{FilterTourPackages?.map((tour_package) => (
					<Link key={tour_package.id} to={`/app/${link}/${tour_package.id}`}>
						<section
							className={`${styles.card} ${
								FilterTourPackages?.length < 3 ? "card_size" : ""
							}`}
						>
							<section className={styles.card__header}>
								<img src={`${imgPath}/${tour_package.image_url}`} alt="" />

								<Rating rating={tour_package.rating} />
							</section>
							<section className={styles.card__body}>
								<h1>
									<span>{tour_package.name}</span>
								</h1>
								<ul>
									<li>
										<CiClock2 />
										<span>7 days, 6 nights</span>
									</li>
									<li>
										<CiLocationOn />
										<span>{tour_package.location}</span>
									</li>
									<li>
										<GiMoneyStack />
										<span>
											₦{new Intl.NumberFormat().format(tour_package.price)}
										</span>
									</li>
								</ul>
							</section>
						</section>
					</Link>
				))}
			</section>
		</section>
	);
}

export default PackageList;
