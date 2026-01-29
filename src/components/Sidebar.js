import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaBell,
  FaCog,
} from "react-icons/fa";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Crowd Sense AI</h2>

      <nav>
        <Link to="/home"><FaHome /> Home</Link>
        <Link to="/history"><FaChartBar /> Historical Data</Link>
        <Link to="/predictions"><FaChartBar /> Predictions</Link>
        <Link to="/contacts"><FaUsers /> Contacts</Link>
        <Link to="/notifications"><FaBell /> Notifications</Link>
        <Link to="/settings"><FaCog /> Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
