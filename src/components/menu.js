import classes from "./menu.module.css";
import logo from "../images/jndj-logo.png";

const Menu = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="jndj logo" />
      <h3>JNDJWEBSITE™</h3>
      <ul className={classes.item3}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Menu;
