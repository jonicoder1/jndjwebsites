import classes from "./web-services.module.css";

const WebServices = () => {
  const CardHandler = () => {
    const cards = [
      {
        Title: "Basic",
        id: 0,
        list1: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
        list2: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
        button: "Buy Now",
      },
      {
        Title: "Intermediate",
        id: 1,
        list1: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
        list2: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
        button: "Buy Now",
      },
      {
        Title: "Advanced",
        id: 3,
        list1: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
        list2: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
        button: "Buy Now",
      },
    ];

    const cardsMap = cards.map((card) => {
      return (
        <div className={classes.card} id={card.id}>
          <h4>{card.Title}</h4>
          <div className={classes.topDiv}>
            <ul>
              <li>{card.list1[0]}</li>
              <li>{card.list1[1]}</li>
              <li>{card.list1[2]}</li>
              <li>{card.list1[3]}</li>
              <li>{card.list1[4]}</li>
            </ul>
            <button className={classes.button}>Buy Now</button>
          </div>
          <div className={classes.botDiv}>
            <ul>
              <li>{card.list2[0]}</li>
              <li>{card.list2[1]}</li>
              <li>{card.list2[2]}</li>
              <li>{card.list2[3]}</li>
              <li>{card.list2[4]}</li>
            </ul>
            <button className={classes.button}>Buy Now</button>
          </div>
        </div>
      );
    });

    return cardsMap;
  };

  return (
    <div className={`${classes.container} ${classes}`}>
      <h1>Web Services Section</h1>
      <h3>Simple Website Design Packages & Pricing</h3>
      <div className={classes.cardsContainer}>
        <CardHandler />
      </div>
    </div>
  );
};

export default WebServices;
