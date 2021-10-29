import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleState = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    //  console.log(form);
  };

  const reset = () => {
    setForm(initialState);
  };

  return {
    handleState,
    form,
    reset,
  };
};
