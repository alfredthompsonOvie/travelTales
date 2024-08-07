import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/Index";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Bookings from "./pages/Bookings";
import Destinations from "./pages/Destinations";
import { PackagesProvider } from "./contexts/PackagesContext";

import NotFound from "./pages/NotFound";
import PackageDetail from "./components/views/packagelDetail/PackageDetail";
import ScrollToTop from "./components/ScrollToTop";

import ScrollRestoration from "./components/ScrollRestoration";
import FlightDetails from "./pages/flightDetails/FlightDetails";

const Checkout = lazy(() => import("./pages/flightDetails/FlightDetails"));

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
						{/* <Route index element={<Navigate replace to="/" />} /> */}
						<Route path="destinations" element={<Destinations />} />
						<Route path="hotels" element={<Hotels />} />
						<Route
							path=":type/:id"
							element={<PackageDetail />}
							loader={({ params }) => {
								console.log(params.type);
								console.log(params.id);
							}}
						/>
						<Route path="flights" element={<Flights />} />
						<Route path="flights/:id" element={<FlightDetails />} />
						<Route path="bookings" element={<Bookings />} />
						<Route path="checkout" element={<Checkout />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</PackagesProvider>
	);
}

export default App;
