/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GoFilter } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";

import styles from "./Packages.module.css";
import Rating from "../rating/Rating";

function PackageList({ tourPackages, title, imgPath, link }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isPackageTypesOpen, setIsPackageTypesOpen] = useState(false);

	const [FilterTourPackages, setFilterTourPackages] = useState([]);

	const packageType = tourPackages?.map(item=> item.package_type);

	useEffect(() => {
		console.log("destinations Packages", tourPackages);
		setFilterTourPackages(tourPackages)
	}, [tourPackages]);

	function handleFilterToggle() {
		setIsOpen(!isOpen);
	}
	function handleFilterByPackageType(packageType) {
		const tour = tourPackages.filter(tourByPackage => tourByPackage.package_type === packageType);

		setFilterTourPackages(tour);
		setIsOpen(false);
	}

	function handleFilterReset() {
		setFilterTourPackages(tourPackages)
		setIsOpen(false);
	}
	function handleFilterByLowestPrice() {
		const sortedItems = tourPackages.slice().sort((a, b) => a.price - b.price);

		setFilterTourPackages(sortedItems)
		setIsOpen(false);
	}
	function handleFilterByHighestPrice() {
		const sortedItems = tourPackages.slice().sort((a, b) => b.price - a.price);

		setFilterTourPackages(sortedItems)
		setIsOpen(false);
	}

	return (
		<section className={styles.container}>
			{FilterTourPackages?.length !== 0 && (
				<header className={styles.header}>
					<h1>Popular {title}</h1>

					<section className={styles.filterContainer}>
						<button className={styles.btn} onClick={handleFilterToggle}>
							<GoFilter />
							<span>Filter</span>
						</button>
						{isOpen && (
							<section className={styles.listContainer}>
								<ul className={styles.filterList}>
									<li>
										<button className={styles.btn} onClick={handleFilterReset}>
											All
										</button>
									</li>
									<li>
										<button className={styles.btn} onClick={handleFilterByLowestPrice}>
											<span>Price</span> <span>(low-high)</span>
										</button>
									</li>
									<li>
										<button className={styles.btn} onClick={handleFilterByHighestPrice}>
											<span>Price</span> <span>(high-low)</span>
										</button>
									</li>
									<li>
										<button className={styles.btn} onClick={()=>setIsPackageTypesOpen(!isPackageTypesOpen)}>
											<span>package type</span>
										</button>
										{isPackageTypesOpen && <section className={styles.filterOptions}>
											{packageType.map((item, idx) => <button onClick={()=>handleFilterByPackageType(item)} key={idx}>{item}</button>)}
										</section>}
									</li>
								</ul>
							</section>
						)}
					</section>
				</header>
			)}

			<section className={styles.packageList}>
				{FilterTourPackages?.map((tour_package) => (
					<Link key={tour_package.id} to={`/app/${link}/${tour_package.id}`}>
						<section className={styles.card}>
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
