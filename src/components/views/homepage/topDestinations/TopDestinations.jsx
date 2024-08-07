/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Search from "../../../search/Search";
import Gallery from "../../../ui/gallery/Gallery";
import styles from './TopDestinations.module.css';

function TopDestinations({ places, isLoading, title, linkPath, search, imgPath}) {

	if (isLoading) return <p>Loading...</p>;

	return (
		<section className={styles.container}>
			{search && <Search />}

			<section className={styles.header}>
				<h1>{title}</h1>
				<Link to={linkPath}>View All</Link>
			</section>

			<Gallery places={places} mode="topDestinations" imgPath={imgPath} link={linkPath} />
		</section>
	);
}

export default TopDestinations;
