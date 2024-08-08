import styles from "./Message.module.css";

function Message() {
	return (
		<section className={styles.message}>
			<p>Ooops it appears we don't have a flight plan for your search criteria</p>
			<p>Please try using just the location, or location with the service tier like <span className={styles.service_tier}>Economy</span>, <span className={styles.service_tier}>Premium Economy</span>, <span className={styles.service_tier}>First Class</span>, or <span className={styles.service_tier}>Business</span> let see if we've got one for you</p>
		</section>
	);
}

export default Message;
