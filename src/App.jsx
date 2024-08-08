import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/Index";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Bookings from "./pages/Bookings";
import Destinations from "./pages/Destinations";
import { PackagesProvider } from "./contexts/PackagesContext";

import NotFound from "./pages/notFoundPage/NotFound";
import PackageDetail from "./components/views/packageDetail/PackageDetail";
import ScrollToTop from "./components/ScrollToTop";

import ScrollRestoration from "./components/ScrollRestoration";
import FlightDetails from "./pages/flightDetails/FlightDetails";

function App() {
	// useScrollRestoration();
	return (
		<PackagesProvider>
			<BrowserRouter>
				<ScrollToTop />
				<ScrollRestoration />
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="app" element={<AppLayout />}>
						<Route path="destinations" element={<Destinations />} />
						<Route path="hotels" element={<Hotels />} />
						<Route path=":type/:id" element={<PackageDetail />} />
						<Route path="flights" element={<Flights />} />
						<Route path="flights/:id" element={<FlightDetails />} />
						<Route path="bookings" element={<Bookings />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</PackagesProvider>
	);
}

export default App;
