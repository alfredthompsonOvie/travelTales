/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const PackagesContext = createContext();

const initialState = {
	packages: [],
	flights: [],
	searchFlightWithQuery: {},
	isLoading: false,
	error: "",
	isFavorited: {},
};

function reducer(state, action) {
	switch (action.type) {
		case "loading":
			return { ...state, isLoading: true };
		case "packages/loaded":
			return {
				...state,
				isLoading: false,
				packages: action.payload,
			};
		case "packages/updated":
			return {
				...state,
				isLoading: false,
				packages: action.payload,
			};
		case "flights/loaded":
			return {
				...state,
				isLoading: false,
				flights: action.payload,
			};
		case "flights/updated":
			return {
				...state,
				isLoading: false,
				searchFlightWithQuery: [],
				flights: action.payload,
			};
		case "flightsSearch/updated":
			return {
				...state,
				isLoading: false,
				searchFlightWithQuery: action.payload,
			};
		case "flightsSearch/deleted":
			return {
				...state,
				searchFlightWithQuery: {},
			};
		case "isFavorited/updated":
			return {
				...state,
				isLoading: false,
				isFavorited: action.payload,
			};

		default:
			throw new Error("Unknown action type");
	}
}

function PackagesProvider({ children }) {
	const [{ packages, flights, searchFlightWithQuery, isLoading, error, isFavorited }, dispatch] =
		useReducer(reducer, initialState);

	useEffect(() => {
		async function getPackages() {
			dispatch({ type: "loading" });

			try {
				const response = await fetch("/data/data.json");
				const data = await response.json();

				dispatch({ type: "packages/loaded", payload: data });
			} catch (error) {
				console.error(error);
			}
		}
		getPackages();
	}, []);

	function setFavourite(category, id) {

		packages[category].forEach(data => {
			if (data.id === id ) {
				data.isFavourite = !data.isFavourite;
			}
		});

		// dispatch({ type: "packages/updated", payload: updatedPackages });
	}

	function searchFlight(query) {
		const queryObj = Object.fromEntries(
			Object.entries(query).filter(
				([key, value]) => value !== "" && value !== null && value !== undefined
			)
		);

		const { arrival_city, service_tier, departure_date } = queryObj;

		const filteredQuery = {
			...(arrival_city !== undefined && {arrival_city}),
			...(service_tier !== undefined && {service_tier}),
			...(departure_date !== undefined && {departure_date}),
		} 
		// console.log(filteredQuery)

		dispatch({ type: "flightsSearch/updated", payload: filteredQuery });
	}

	function deleteSearchQuery() {
		dispatch({ type: "flightsSearch/deleted" })
	}

	return (
		<PackagesContext.Provider
			value={{
				packages,
				flights,
				searchFlightWithQuery,
				searchFlight,
				isLoading,
				error,
				setFavourite,
				deleteSearchQuery
			}}
		>
			{children}
		</PackagesContext.Provider>
	);
}

function usePackages() {
	const context = useContext(PackagesContext);
	if (context === undefined)
		throw new Error("Cannot access hotel context outside hotels provider");
	return context;
}

export { PackagesProvider, usePackages };
