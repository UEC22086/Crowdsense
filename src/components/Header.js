import "../styles/Header.css";
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <h1>Crowd Sense AI – Intelligent Crowd Monitoring System</h1>
      <div className="header-right">
        <FaBell size={22} />
      </div>
    </div>
  );
}

export default Header;
