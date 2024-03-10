import React, { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddFood(formState);
    setFormState({ name: '', image: '', calories: 0, servings: 0 }); // Reset the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        type="text"
        name="image"
        value={formState.image}
        onChange={handleChange}
        placeholder="Image URL"
      />

      <input
        type="number"
        name="calories"
        value={formState.calories}
        onChange={handleChange}
        placeholder="Calories"
      />

      <input
        type="number"
        name="servings"
        value={formState.servings}
        onChange={handleChange}
        placeholder="Servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
