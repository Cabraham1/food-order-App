import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <React.Fragment>
      <AvailableMeals />
      <MealsSummary />
    </React.Fragment>
  );
};

export default Meals;
