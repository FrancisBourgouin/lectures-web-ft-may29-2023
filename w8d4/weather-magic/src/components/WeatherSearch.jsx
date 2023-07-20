import { useState } from "react";

export default function WeatherSearch(props) {
  const initialValues = { city: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    setFormData(initialValues);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter the city name"
          onChange={handleChange}
          value={formData.city}
        />
        <button>Fetch weather!</button>
      </form>
    </section>
  );
}
