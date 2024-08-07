import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Hero from "../components/views/homepage/hero/Hero";
import TopDestinations from "../components/views/homepage/topDestinations/TopDestinations";
import WhyChooseUs from "../components/views/homepage/whyChooseUs/WhyChooseUs";
import Testimonial from "../components/views/homepage/testimonial/Testimonial";

import { useEffect, useState } from "react";
import { usePackages } from "../contexts/PackagesContext";


function Index() {
	const { isLoading, packages } = usePackages();

	const [topDestinations, setTopDestinations] = useState([]);
	const [topHotels, setTopHotels] = useState([]);
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		if (packages.destinations) {
			const destinations = packages.destinations?.filter(
				(topDestination) => topDestination.rating > 4.7
			);
			setTopDestinations(destinations);
		}

		if (packages.hotels) {
			const hotels = packages.hotels?.filter(
				(topDestination) => topDestination.rating > 4.7
			);
			setTestimonials(packages.testimonials);
			setTopHotels(hotels);
		}
	}, [packages, isLoading]);


	return (
		<>
			<Navbar mode="homepage" />
			<main className="main">
				<Hero />

				<TopDestinations
					places={topDestinations}
					isLoading={isLoading}
					title="Top Destinations"
					link="/app/destinations"
					search={true}
					imgPath="/images/destinations"
					
				/>

				<WhyChooseUs />

				<TopDestinations
					places={topHotels}
					isLoading={isLoading}
					title="Top Hotels"
					link="/app/hotels"
					imgPath="/images/hotels"
				/>

				<Testimonial testimonials={ testimonials } centered={ true} detailspage={false} isLoading={isLoading} />
			</main>
			<Footer />
		</>
	);
}

export default Index;
