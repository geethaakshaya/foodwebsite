
import React, { useContext, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodContext} from '../Components/FoodContext';
import type { FoodForm } from '../Components/FoodContext';
const HomePage: React.FC = () => {
  const context = useContext(FoodContext);
  const navigate = useNavigate();

  const [form, setForm] = useState<FoodForm>({
    name: '',
    type: '',
    calories: '',
  });

  if (!context) {
    return <div>Error: FoodContext not found.</div>;
  }

  const { setFoodData } = context;

  const handleSubmit = (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFoodData(form);
    navigate('/details');
  };

  return (
    <div>
      <h2>Enter Food Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Food Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <input
          placeholder="Food Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <br />
        <input
          placeholder="Calories"
          value={form.calories}
          onChange={(e) => setForm({ ...form, calories: e.target.value })}
        />
        <br />
        <button type="submit">Go to Details</button>
      </form>
    </div>
  );
};

export default HomePage;
