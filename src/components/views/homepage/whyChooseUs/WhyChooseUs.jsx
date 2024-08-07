import "./whyChooseUs.css";

function WhyChooseUs() {
	return (
		<section className="container__why">
			<section className="contents__why__container">
				<section className="illustration__why">
					<img src="/img6.jpg" alt="cable car" className="card__img" />
				</section>
				<section className="contents__why">
					<h1 className="contents__why__title">Experience The New Adventure With Us</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, nobis sequi facere ullam maxime, sit nihil
						doloremque, asperiores tempora voluptates odit iure magni. Officia
						eaque aliquid dolor, iste quos facere.
					</p>

					<ul className="whylist">
						<li>
							<img src="/travel.png" alt="icon" />
							<section>
								<h1>World class travel</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Quidem autem deleniti.
								</p>
							</section>
						</li>
						<li>
							<img src="/travel.png" alt="icon" />
							<section>
								<h1>Affordable Price</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Quidem autem deleniti.
								</p>
							</section>
						</li>
						<li>
							<img src="/travel.png" alt="icon" />
							<section>
								<h1>Best of Hotel</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Quidem autem deleniti.
								</p>
							</section>
						</li>
					</ul>
				</section>
			</section>
		</section>
	);
}

export default WhyChooseUs;
