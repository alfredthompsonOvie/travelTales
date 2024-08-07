import Banner from "../components/ui/banner/Banner";
import Packages from "../components/ui/tour_packages/Packages";
import { usePackages } from "../contexts/PackagesContext";

function Destinations() {
	const { packages } = usePackages();

	return (
		<main>
			<Banner
				banner="main_pages/destination1.jpg"
				bannerAlt=""
				title="Explore Holiday Packages Around The World"
			/>

      <Packages tourPackages={packages.destinations} title="destinations" imgPath="/images/destinations" link="destinations"/>
		</main>
	);
}

export default Destinations;
