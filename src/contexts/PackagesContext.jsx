/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const PackagesContext = createContext();

const initialState = {
	packages: [],
	flights: [],
	searchFlightBy: {},
	isLoading: false,
	error: "",
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
				searchFlightBy: [],
				flights: action.payload,
			};
		case "flightsSearch/updated":
			return {
				...state,
				isLoading: false,
				searchFlightBy: action.payload,
			};
		case "flights/search":
			return {
				...state,
				isLoading: false,
				searchFlightBy: action.payload,
			};

		default:
			throw new Error("Unknown action type");
	}
}

function PackagesProvider({ children }) {
	const [{ packages, flights, searchFlightBy, isLoading, error }, dispatch] =
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
		console.log(id, category)
		// const updatedPackages = [...packages, category: packages[category].map((item) => {
			// 	if (item.id === id) {
		// 		item.isFavourite = !item.isFavourite;
		// 	}

		// 	return item;
		// })];
		packages[category].forEach(data => {
			if (data.id === id ) {
				data.isFav = !data.isFav;
			}
		});
		
		console.log(packages)

		// dispatch({ type: "packages/updated", payload: updatedPackages });
	}

	function searchFlight(query) {
		const filteredQuery = Object.fromEntries(
			Object.entries(query).filter(
				([key, value]) => value !== "" && value !== null && value !== undefined
			)
		);

		// dispatch({ type: "flights/updated", payload: filteredArray });
		dispatch({ type: "flightsSearch/updated", payload: filteredQuery });
	}

	return (
		<PackagesContext.Provider
			value={{
				packages,
				flights,
				searchFlightBy,
				searchFlight,
				isLoading,
				error,
				setFavourite
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
