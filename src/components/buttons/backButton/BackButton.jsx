import { IoArrowBackOutline } from "react-icons/io5";
import styles from './BackButton.module.css'
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function handleNavigation() {
		navigate(-1);
	}
	return (
		<button onClick={handleNavigation} className={styles.backBtn}>
			<IoArrowBackOutline />
			<span>Back</span>
		</button>
	);
}

export default BackButton;
