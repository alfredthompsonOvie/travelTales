{hotel_id: 10116323,
last_reservation_data: {last_reservation_ellapsed_months:1}
is_free_cancellable: 0
city: "Lisboa"
preferred_plus: 1
soldout: 0
main_photo_id: 480474452
latitude: 38.70535
updated_checkin: null
is_geo_rate: ""
class: 3
countrycode: "pt"
is_no_prepayment_block: 0
distances: [],
min_total_price: 1155.92
main_photo_url: "https://cf.bstatic.com/xdata/images/hotel/square60/480474452.jpg?k=cb77c09a1f9fc6b875dd0fc373a25fcad0c1406392c2070f20680bb275ec5f65&o="
checkin:{
until:"00:00"
from:"15:00"},
type: "property_card"
preferred: 1
review_score_word: "Excellent"
extended: 0
is_genius_deal: 0
hotel_include_breakfast: 0
city_in_trans: "in Lisbon"
hotel_has_vb_boost: 0
children_not_allowed: 0
review_nr: 1400
checkout:
{until:"11:00"
from:""}
genius_discount_percentage: 0
default_language: "es"
badges: [],
default_wishlist_name: "Lisbon",
class_is_estimated: 0,
ufi: -2167973,
has_swimming_pool: 1
composite_price_breakdown:{
has_long_stays_monthly_rate_price:0}


excluded_amount:{
tax_exceptions: []}
gross_amount: {}
benefits: []
charges_details:{}
included_taxes_and_charges_amount: {}
gross_amount_per_night: {}
net_amount: {}
has_long_stays_weekly_rate_price:0
all_inclusive_amount: {}
client_translations:{}
items:[]
gross_amount_hotel_currency:{}

is_smart_deal:0
accommodation_type:204
block_ids: ["1011632303_373826179_3_0_0"]
unit_configuration_label:"<b>Hotel room</b>: 3 beds"
id:"property_card_10116323"
review_score:8.8
hotel_name_trans:"JAM Lisbon"
cant_book:0
updated_checkout:null
hotel_name:"JAM Lisbon"
currencycode:"EUR"
timezone:"Europe/Lisbon"
bwallet:
longitude:-9.158693}



get chatgpt to write a small description for you 
Aspom

Aspom Travel Agency was founded on the 2nd of February, 2012 and has remained at the top of its game providing visa assistants, hotels, holiday packages, tours and flight deals to her clients.



	// Query Params for Bookings.com
	/*
  latitude
  longitude
  arrival_date Date (yyyy-mm-dd) 
  departure_date Date (yyyy-mm-dd)


  get => location to lat/lng
  search hotels by coordinates
  */



  📘
Project Overview
Objective:
The Travel and Tours Website project aims to introduce you to front-end web development using React.js. This project will help you understand how to create interactive web applications, integrate APIs, and manage state using basic React principles.

Description:
Develop a travel and tours website that allows users to browse and book travel packages. This project involves handling user inputs, integrating APIs for travel data, and managing state. The project will include features such as search functionalities, detailed views for travel packages, and a client-side booking system.

Technologies:
React.js for building the application.

API Integration: RESTful APIs for fetching travel packages (optional).

CSS Frameworks: Bootstrap, Tailwind CSS, Bulma or any other frameworks for UI design. 

LocalStorage: To simulate user authentication and save user data.

Project Timeline:
Start Date: Friday, July 26, 2024

Finish Date: Wednesday, August 7, 2024

Steps:
Setup Project:

Initialize a new React.js project using Create React App.

Set up necessary dependencies and project structure.

Landing Page:

Design a landing page with a search bar for destinations.

Implement a carousel or grid layout to showcase featured travel packages.

Package Listings:

Create a component to list travel packages.

If using an API: Fetch data from an API. Examples of APIs you can use include:

Skyscanner API: Fetch travel packages, flights, and hotel deals.

API Endpoint: https://rapidapi.com/skyscanner/api/skyscanner-flight-search

Example Request URL:

Copy
https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2024-07-27
Sign Up: RapidAPI

Documentation: Skyscanner API Docs

Amadeus Travel APIs: Access a variety of travel-related information including flight offers, hotel deals, and destination content.

API Endpoint: https://developers.amadeus.com/self-service

Example Request URL:

Copy
https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-07-27&adults=1
Sign Up: Amadeus

Documentation: Amadeus API Docs

Booking.com API (via RapidAPI): Access hotel booking data.

API Endpoint: https://rapidapi.com/apidojo/api/booking

Example Request URL:

Copy
https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=2024-07-27&checkout_date=2024-07-28&room_number=1&adults_number=1&dest_id=-1456928&dest_type=city&locale=en-gb&units=metric&filter_by_currency=USD&order_by=popularity
Sign Up: RapidAPI

Documentation: Booking.com API Docs

If not using an API: Create a local JSON file to store travel package data and import it.

Implement filters and search functionalities to refine package listings. (Optional)

Package Details:

Design a detailed view for each travel package with images, descriptions and pricing.

Implement booking functionality with a form for user details.

Client-Side Booking System:

Use LocalStorage to save user booking details and simulate user authentication. (Optional)

Create a booking confirmation page to display saved bookings.

State Management:

Use React state and props to handle travel package data and booking state.

Responsive Design:

Ensure the website is responsive and works well on different devices and screen sizes.

Documentation:

Create a README.md file with usage guidelines and project details. This file should explain what the project is, how to set it up, and how to use it.

GitHub Repository:

Initialize a Git repository in your project directory.

Commit your changes and push your code to a GitHub repository. This will help you manage your project versions and share your work with others.

Example Features:
Search and Filter: Users can search for travel destinations and filter results based on criteria such as price, location, and package type. (Optional)

Package Details: Detailed views for each travel package with information like itinerary, inclusions, etc.

Booking: A form for users to book packages and save their details using client-side storage solutions such as LocalStorage. (Optional)

Booking Confirmation: Display a booking confirmation page showing the details of the booked travel package. (Optional)

Favorite Packages: Allow users to mark travel packages as favorites and store this information in LocalStorage. (Optional)

Testimonials: Add a section for user testimonials or reviews to enhance credibility.

Handling Authentication Without Backend: Since this project is focused solely on the front end and cannot involve backend authentication, consider using the following alternatives:

LocalStorage: Store user data such as bookings in the browser’s LocalStorage to simulate saving and retrieving user information. (Optional)

Mock Data: Use mock data to simulate user interactions and state changes without actual backend integration. (Optional)