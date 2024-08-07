
import { usePackages } from "../contexts/PackagesContext";
import PackageList from "../components/ui/tour_packages/Packages";
import Banner from "../components/ui/banner/Banner";


function Hotels() {
	const { packages } = usePackages();

	return (
		<main>
			<Banner
				banner="main_pages/hotel1.jpg"
				bannerAlt=""
				title="Explore Holiday Packages Around The World"
			/>

      <PackageList tourPackages={packages.hotels} title="hotels" imgPath="/images/hotels" link="hotels"/>
		</main>
	);
}

export default Hotels;
