import "./styles.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <nav className="fixed-navigation">
      <img className="logo" src={logo} />
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#browse">
            Browse
          </a>
        </li>
        <li>
          <a className="nav-link" href="#rent">
            Rent with us
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Sign up
          </a>
        </li>
        <button className="button primary">Log in</button>
      </ul>
      <button className="button primary hidden">Menu</button>
    </nav>
  );
};

export default Header;
