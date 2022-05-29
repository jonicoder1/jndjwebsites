import classes from "./about-me.module.css";
import smallCircle from "../images/small_circle.png";

const AboutMe = () => {
  return (
    <div className={classes.container}>
      <h1>About Section</h1>
      <br />
      <br />
      <div className={classes.textContainer}>
        <img src={smallCircle} alt="" className={classes.smallCircle} />
        <p>
          Welcome to jndjwebsites, <br />
          we build websites for individuals, businesses, <br />
          companies &/or people who just want to showcase their work.
          <br /> <br />
          Our goal is to give you the best experience while also giving you a
          great
          <br />
          website for your business.
          <br />
          <br />
          Our customer service is top notch and we are dedicated to <br />
          giving you the best service
        </p>
      </div>
      <br />
    </div>
  );
};

export default AboutMe;
