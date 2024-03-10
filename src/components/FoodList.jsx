//import and render
import "../App.css";
import React, { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  function handleDelete(foodId) {
    const filteredFoods = foods.filter((food) => food.id !== foodId);
    setFoods(filteredFoods);
  }
  function addNewFood(newFood) {
    setFoods([...foods, newFood]);
  }
  return (
    <div className="App">
      {/* for a LIST we use KEY */}
      <AddFoodForm onAddFood={addNewFood} />
      {foods.map((foodItem) => (
        <FoodBox key={foodItem.name} food={foodItem} onDelete={handleDelete} />
      ))}
    </div>
  );
}
export default FoodList;
