import React, { useState, useEffect } from "react";
import Food from "../food/Food";

const Foods = () => {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/food/random_food?size=15")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => setDishes(data))
  }, []);

  return (
    <>
      {dishes.map((dish) => (
        <Food
        dish={dish.id}
        />
      ))}
    </>
  );
};

export default Foods;
