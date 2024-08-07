import BookingForm from "../components/ui/bookingForm/BookingForm";

function Bookings() {
	return (
		<main className="bookingPageContainer">
			<header>
				<h1>Book Your Tour</h1>
				<p>
					Reserve your ideal trip early for a hassle-free trip; secure comfort
					and convenience!
				</p>
			</header>

			<BookingForm />
		</main>
	);
}

export default Bookings;
