import React, { useState, useEffect } from "react";
import Food from "../food/Food";

const Foods = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/food/random_food?size=15")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  return (
    <>
      {dishes.map((dish) => (
        <Food
          key={dish.id}
          dish={dish.dish}
          desc={dish.description}
          ing={dish.ingredient}
          mes={dish.measurement}
        />
      ))}
    </>
  );
};

export default Foods;
