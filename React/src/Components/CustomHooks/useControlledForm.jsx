import { useState } from "react";

export function useControlledForm() {

    function createData() {
        return {
            username: '',
            password:''
        }
    }


  const [formData, setFormData] = useState(createData());

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return {
 formData,
 handleInputChange
  };
}