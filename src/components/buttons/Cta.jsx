/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./cta.css";
function Cta({children }) {
  return (
    <Link className="cta" to="/app/bookings">
      {children}
    </Link>
  )
}

export default Cta
