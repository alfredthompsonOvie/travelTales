import Banner from "../components/ui/banner/Banner";
import FlightPackages from "../components/views/flightpage/FlightPackages";

function Flights() {
	return (
		<main>
			<Banner
				banner="main_pages/flight3.jpg"
				bannerAlt=""
				title="Search & Book Cheap Flights"
      />
      
      <FlightPackages />
		</main>
	);
}

export default Flights;
