/* eslint-disable react/prop-types */
import "./testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Autoplay, Pagination } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";

function Testimonial({ testimonials, detailspage, isLoading }) {
	
	if (isLoading) return <p>Loading...</p>;
	
	return (
		<section className={`container__testi ${detailspage? "detailspage" : ""}`}>
			<h1 className="testi__header">What travelers say</h1>
			<section className="contents__testi">
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						600: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
				>
					{testimonials?.map(testimonial => <SwiperSlide key={testimonial.id}>
						<section className="card__testi">
							<header>
								<img src="/user.jpg" alt="" className="avatar" />
								<section className="profile">
									<h1>{testimonial.name}</h1>
									<p>{testimonial.tour}</p>
								<p className="testi__rating">
									{testimonial.rating}
									<MdOutlineStar />
								</p>
								</section>
							</header>
							<p className="testimonial">
								{testimonial.testimonial}
							</p>
						</section>
					</SwiperSlide>)}
					
				</Swiper>
				{/* 
        
        <section className="card__testi">
          <header>
            <img src="/img1.jpg" alt="" className="avatar" />
            <section className="profile">
              <h1>John Smith</h1>
              <p>tourist</p>
            </section>
            <p className="testi__rating">3.5</p>
          </header>
          <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam officia maiores asperiores distinctio nulla quidem fugit est laudantium ipsum debitis cupiditate, provident, ducimus explicabo aspernatur dolores ratione? Facilis, architecto.</p>
        </section>
        <section className="card__testi">
          <header>
            <img src="/img1.jpg" alt="" className="avatar" />
            <section className="profile">
              <h1>John Smith</h1>
              <p>tourist</p>
            </section>
            <p className="testi__rating">3.5</p>
          </header>
          <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam officia maiores asperiores distinctio nulla quidem fugit est laudantium ipsum debitis cupiditate, provident, ducimus explicabo aspernatur dolores ratione? Facilis, architecto.</p>
        </section>
        <section className="card__testi">
          <header>
            <img src="/img1.jpg" alt="" className="avatar" />
            <section className="profile">
              <h1>John Smith</h1>
              <p>tourist</p>
            </section>
            <p className="testi__rating">3.5</p>
          </header>
          <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam officia maiores asperiores distinctio nulla quidem fugit est laudantium ipsum debitis cupiditate, provident, ducimus explicabo aspernatur dolores ratione? Facilis, architecto.</p>
        </section> */}
			</section>
		</section>
	);
}

export default Testimonial;
