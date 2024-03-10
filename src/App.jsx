//import and render
// import "./App.css";
import React, { useState } from "react";
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";
// import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';

function App() {
  // const [foods, setFoods] = useState(foodsJson);

  // function handleDelete(foodId) {
  //   const filteredFoods = foods.filter((food) => food.id !== foodId);
  //   setFoods(filteredFoods);
  // }
  // function addNewFood(newFood) {
  //   setFoods([...foods, newFood]);
  // }
  return (
    <div className="App">
    <FoodList />
      {/* for a LIST we use KEY */}
      {/* <AddFoodForm onAddFood={addNewFood} />
      {foods.map((foodItem) => (
        <FoodBox key={foodItem.name} food={foodItem} onDelete={handleDelete} />
      ))} */}
    </div>
  );
}
export default App;

// function App() {
//   const [foods, setAllFoods] = useState(foodsJson);
//   const deleteFood = (id) => {
//     const updatedFood = foods.filter((food) => food.id != id);
//     setFoods(updatedFood);
//   }
//   return (
//     <div className="App">
//       <FoodBox food={{
//         name: "Orange",
//         calories: 85,
//         image: "https://i.imgur.com/abKGOcv.jpg",
//         servings: 1
//       }} />
//     </div>
//   );
// }
