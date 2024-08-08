/* eslint-disable react/prop-types */
import { GoFilter } from "react-icons/go";
import styles from "./Filter.module.css";

function Filter({
	onHandleFilterReset,
	onHandleFilterByHighestPrice,
	onHandleFilterByLowestPrice,
	onHandleFilterByPackageType,
	onHandleFilterToggle,
	packageType,
	toggleFilterOptions,
	togglePackageTypesOptions,
	onHandleTogglePackageTypesOptions,
	filterBy
}) {


	return (
		<section className={styles.filterContainer}>
			<button className={styles.btn} onClick={onHandleFilterToggle}>
				<GoFilter />
				<span>{filterBy}</span>
			</button>
			{toggleFilterOptions && (
				<section className={styles.listContainer}>
					<ul className={styles.filterList}>
						<li>
							<button className={styles.btn} onClick={onHandleFilterReset}>
								All
							</button>
						</li>
						<li>
							<button
								className={styles.btn}
								onClick={onHandleFilterByLowestPrice}
							>
								<span>Price</span> <span>(low-high)</span>
							</button>
						</li>
						<li>
							<button
								className={styles.btn}
								onClick={onHandleFilterByHighestPrice}
							>
								<span>Price</span> <span>(high-low)</span>
							</button>
						</li>
						<li>
							<button
								className={styles.btn}
								onClick={onHandleTogglePackageTypesOptions}
							>
								<span>package type</span>
							</button>
							{togglePackageTypesOptions && (
								<section className={styles.filterOptions}>
									{packageType.map((item, idx) => (
										<button
											onClick={() => onHandleFilterByPackageType(item)}
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
