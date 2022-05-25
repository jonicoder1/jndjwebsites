import classes from "./menu.module.css";
import logo from "../images/jndj-logo.png";

const Menu = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="jndj logo" />
      <h3 className={classes.h3}>JNDJWEBSITE™</h3>
      <ul className={classes.item3}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
