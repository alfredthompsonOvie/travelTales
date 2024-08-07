/* eslint-disable react/prop-types */
import { GoFilter } from "react-icons/go";
import styles from "./Filter.module.css";
import { useState } from "react";
function Filter({
	isOpen,
	handleFilterToggle,
	handleFilterReset,
	handleFilterByHighestPrice,
	handleFilterByLowestPrice,
	handleFilterByPackageType,
  packageType,
}) {

	const [isPackageTypesOpen, setIsPackageTypesOpen] = useState(false);

	return (
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
								onClick={() => setIsPackageTypesOpen(!isPackageTypesOpen)}
							>
								<span>package type</span>
							</button>
							{isPackageTypesOpen && (
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
							)}
						</li>
					</ul>
				</section>
			)}
		</section>
	);
}

export default Filter;
