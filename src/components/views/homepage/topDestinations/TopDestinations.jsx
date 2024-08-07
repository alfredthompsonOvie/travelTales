/* eslint-disable react/prop-types */
// import Search from "@/components/search/Search";
// import { usePackages } from "../../../../contexts/PackagesContext";
import styles from './TopDestinations.module.css';

import Gallery from "../../../ui/gallery/Gallery";
import Search from "../../../search/Search";
import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react';


function TopDestinations({ places, isLoading, title, link, search, imgPath}) {


	if (isLoading) return <p>Loading...</p>;
	// const topPlaces = places.reduce((acc, place) => place.rating.sort((a, b) => a - b), []);

	return (
		<section className={styles.container}>
			{search && <Search />}

			<section className={styles.header}>
				<h1>{title}</h1>
				<Link to={link}>View All</Link>
			</section>

			<Gallery places={places} mode="topDestinations" imgPath={imgPath} link={link} />
		</section>
	);
}

export default TopDestinations;
