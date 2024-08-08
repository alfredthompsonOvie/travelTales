import { Link } from "react-router-dom";
import styles from "./Brand.module.css";
function Brand() {
	return (
		<Link to="/" className={styles.brand}>
			<span>Travel</span>
			<span>Tales</span>
		</Link>
	);
}

export default Brand;
