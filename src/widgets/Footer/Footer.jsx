import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="https://whoa.onrender.com/">whoa.onrender.com</Link>
      <Link to="https://t.me/perfilev_danil">@perfilev_danil</Link>
    </footer>
  );
};

export default Footer;
