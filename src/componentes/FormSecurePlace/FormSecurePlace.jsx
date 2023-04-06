/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { addPlace } from "api/places";
import {
  DivFormSecurePlace,
  FormFormSecurePlace,
  TextFieldFormSecurePlace,
  ButtonFormSecurePlace,
} from "./FormSecurePlaceStyles";

export default function FormSecurePlace() {
  const formData = new FormData();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    address_city: "",
    address_state: "",
    address_colonia: "",
    address_street: "",
    address_zipcode: "",
    image: "default.jpg",
  });

  const [formError, setFormError] = useState({
    name: { error: false, message: "" },
    description: { error: false, message: "" },
    address_city: { error: false, message: "" },
    address_state: { error: false, message: "" },
    address_colonia: { error: false, message: "" },
    address_street: { error: false, message: "" },
    address_zipcode: { error: false, message: "" },
    image: { error: false, message: "" },
  });

  const [loading, setLoading] = useState(false);

  const handleValidation = () => {
    const regExpNumber = /^\d{1,6}$/;
    const {
      name,
      description,
      address_city,
      address_state,
      address_colonia,
      address_street,
      address_zipcode,
    } = form;
    const internalForm = { ...formError };
    let isCorrect = true;

    if (name === "") {
      internalForm.name.error = true;
      internalForm.name.message = "Completa el nombre";
      isCorrect = false;
    } else {
      internalForm.name.error = false;
      internalForm.name.message = "";
    }

    if (description === "") {
      internalForm.description.error = true;
      internalForm.description.message = "Completa la descripcion";
      isCorrect = false;
    } else {
      internalForm.description.error = false;
      internalForm.description.message = "";
    }

    if (address_city === "") {
      internalForm.address_city.error = true;
      internalForm.address_city.message = "Completa la ciudad";
      isCorrect = false;
    } else {
      internalForm.address_city.error = false;
      internalForm.address_city.message = "";
    }

    if (address_state === "") {
      internalForm.address_state.error = true;
      internalForm.address_state.message = "Completa el estado";
      isCorrect = false;
    } else {
      internalForm.address_state.error = false;
      internalForm.address_state.message = "";
    }

    if (address_colonia === "") {
      internalForm.address_colonia.error = true;
      internalForm.address_colonia.message = "Completa la colonia";
      isCorrect = false;
    } else {
      internalForm.address_colonia.error = false;
      internalForm.address_colonia.message = "";
    }

    if (address_street === "") {
      internalForm.address_street.error = true;
      internalForm.address_street.message = "Completa la calle";
      isCorrect = false;
    } else {
      internalForm.address_street.error = false;
      internalForm.address_street.message = "";
    }

    if (address_zipcode === "") {
      internalForm.address_zipcode.error = true;
      internalForm.address_zipcode.message = "Completa el zipcode";
      isCorrect = false;
    } else if (!regExpNumber.test(address_zipcode)) {
      internalForm.address_zipcode.error = true;
      internalForm.address_zipcode.message = "Solo se aceptan numeros";
    } else {
      internalForm.address_zipcode.error = false;
      internalForm.address_zipcode.message = "";
    }

    setFormError(internalForm);
    setLoading(!isCorrect);
    return isCorrect;
  };

  const createFormData = (formplace) =>{
    Object.keys(formplace).forEach(e => {
      formData.append(e, formplace[e])
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFine = handleValidation();
    if (allFine) {
      setLoading(true);

      createFormData(form)

      const callAddPlace = async (formDataPlace) => {
        const {status} = await addPlace(formDataPlace);

        if (status !== 201) {
          console.log("Error al agregar el lugar");
        } 
      };

      callAddPlace(formData);
      navigate("/places");
    }
  };

  const handleChange = (e) => {
    const nameInput = e.target.name;
    let valueInput = ""
    if (nameInput === "image"){
      // eslint-disable-next-line prefer-destructuring
      valueInput =e.target.files[0]
    }else{
      valueInput = e.target.value;
    }
    

    const internalForm = form;
    internalForm[nameInput] = valueInput;
    setForm(internalForm);
  };

  return (
    <DivFormSecurePlace>
      <FormFormSecurePlace onSubmit={handleSubmit}>
        <h1>Lugares Seguros</h1>

        <TextFieldFormSecurePlace
          error={formError.name.error}
          helperText={formError.name.error && formError.name.message}
          id="outlined-basic"
          label="Nombre"
          name="name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.description.error}
          helperText={
            formError.description.error && formError.description.message
          }
          id="outlined-basic"
          label="Descripcion"
          name="description"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.address_city.error}
          helperText={
            formError.address_city.error && formError.address_city.message
          }
          id="outlined-basic"
          label="Ciudad"
          name="address_city"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.address_state.error}
          helperText={
            formError.address_state.error && formError.address_state.message
          }
          id="outlined-basic"
          label="Estado"
          name="address_state"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.address_colonia.error}
          helperText={
            formError.address_colonia.error && formError.address_colonia.message
          }
          id="outlined-basic"
          label="Colonia"
          name="address_colonia"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.address_street.error}
          helperText={
            formError.address_street.error && formError.address_street.message
          }
          id="outlined-basic"
          label="Calle"
          name="address_street"
          variant="outlined"
          onChange={handleChange}
        />
        <TextFieldFormSecurePlace
          error={formError.address_zipcode.error}
          helperText={
            formError.address_zipcode.error && formError.address_zipcode.message
          }
          id="outlined-basic"
          label="ZipCode"
          name="address_zipcode"
          variant="outlined"
          onChange={handleChange}
        />
        <input name="image" type='file' onChange={handleChange} />
        <ButtonFormSecurePlace
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading ? "Enviando los datos..." : "Enviar datos"}
        </ButtonFormSecurePlace>
      </FormFormSecurePlace>
    </DivFormSecurePlace>
  );
}
