import { useState } from "react";


export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    // ["na"+"me"] => Evaluate the content of the bracket, and then use that as a value

    // setFormData({ ...formData, [name]: value });

    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialValues)

  };

  return { formData, handleChange, handleSubmit }
}