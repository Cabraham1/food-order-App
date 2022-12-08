import React from "react";
import classes from "./Header.module.css";
import MealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>JulieMeal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="a table full of different meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
