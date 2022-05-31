import classes from "./web-services.module.css";

const WebServices = () => {
  return (
    <div className={classes.container}>
      <h1>Web Services Section</h1>
      <h3>Simple Website Design Packages & Pricing</h3>
      <div className={classes.priceContainer}>
        <h4>Basic</h4>
        <div className={classes.topDiv}>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <button className={classes.button}>Buy Now</button>
        </div>
        <div className={classes.botDiv}>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <button className={classes.button}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
