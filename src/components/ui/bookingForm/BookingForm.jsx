/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoIosPaperPlane } from "react-icons/io";

import styles from "./BookingForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";


function BookingForm({ packageName }) {
	const navigate = useNavigate();
	const [hasBooking, setHasBooking] = useState(false);
	const { register, handleSubmit, reset } = useForm();


	// function handleSubmit(e) {
	// 	e.preventDefault();

	// 	//! form validation codes

	// 	
	// }


	const onSubmit = (data) => {
		setHasBooking(true);

		reset();
	};

	function handleHasBooking() {
		navigate("/");
	}
	return (
		<section className={styles.container}>
			<section className={styles.contents}>
				<section className={styles.formCover}>
					<img src="/img8.jpg" alt="" />
				</section>

				<section className={styles.formContainer}>
					<h1>Bookings</h1>

					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<section className={styles.form__group__booking}>
							<label htmlFor="firstName"></label>
							<input type="text" placeholder="First Name" {...register("firstName", {required: true})}/>
							
							<FaUser />
						</section>
						<section className={styles.form__group__booking}>
							<label htmlFor="lastName"></label>
							<input type="text" placeholder="Last Name" {...register("lastName", {required: true})}/>

							<FaUserGroup />
						</section>
						<section className={styles.form__group__booking}>
							<label htmlFor="email"></label>
							<input type="email" placeholder="johnSmith@gmail.com" {...register("lastName", {required: true})}/>

							<IoMdMail />
							{/* <MdAlternateEmail /> */}
						</section>
						<section className={styles.form__group__booking}>
							<label htmlFor="tel"></label>
							<input type="tel" placeholder="Mobile Number" {...register("lastName", {required: true})}/>

							<FaPhone />
						</section>
						<section className={styles.form__group__booking}>
							<label htmlFor="packageName"></label>
							<input
								type="text"
								placeholder="Name of the tour / hotel / flight number"
								defaultValue={packageName}
								{...register("packageName", { required: "true", setValueAs: () => packageName})}
							/>
							<IoIosPaperPlane />
						</section>
						<section className={styles.form__group__booking}>
							<label htmlFor="info"></label>
							<textarea
								name="info"
								placeholder="additional information"
								id="info"
								{...register("info")}
							></textarea>

						</section>
						<section className={styles.form__group__booking}>
							<button>Book Now</button>
						</section>
					</form>
				</section>

				{/* MODAL */}
				{hasBooking && <section className={styles.modal}>
					<section className={styles.modalContents}>
						<h1>Thank you</h1>
						<p>You will receive an email shortly with next steps.</p>
						<button onClick={handleHasBooking}>View More</button>
					</section>
				</section>}
			</section>
		</section>
	);
}

export default BookingForm;
