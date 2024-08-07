/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";
import styles from "./Rating.module.css";
function Rating({rating, mode}) {
	return (
		<p className={`${styles.rating} ${mode === "details" ? styles.details : ""}`}>
			<span>{rating} </span>
			<MdOutlineStar />
		</p>
	);
}

export default Rating;
