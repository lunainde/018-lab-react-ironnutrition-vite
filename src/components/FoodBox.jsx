// Your code here

function FoodBox({food, onDelete}) {
    
    return (
      <div className="food-card">
          {/* 3 | Render a List of FoodBox Components */}
          <p>{food.name}</p>
          <img src={food.image} alt={food.name}/>
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          {/* 4 | Delete List Items */}
          <button className="button" onClick={() => onDelete(food.id)}>Delete</button>
     </div>
    );
  }

export default FoodBox;