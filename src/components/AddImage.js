import React, { useState } from "react";
import Axios from "axios";

const AddImage = () => {
  const [dataImage, setDataImage] = useState({});
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const getName = (e) => {
    setName(e.target.value);
  };
  const getFile = (e) => {
    setDataImage(e.target.files[0]);
  };

  const saveImage = async e => {
    e.preventDefault();

    if(name.trim() === '' || Object.keys(dataImage).length === 0){
       setError(true)
       return
    }
    setError(false)

    const fd = new FormData();
    fd.append("dataImage", dataImage);
    fd.append("name", name);
    try {
       await Axios({
        url: "http://localhost:8282/createImage",
        method: "POST",
        data: fd,
      });

      window.location.href = "/";
    } catch (error) {}
  };
  return (
    <div className="hola">
      <div className="formImage">
        {error  ? <h2>Todos los campos son requeridos</h2> : null}
        <div className="formImage-text">
          <label>Nombre</label>
          <input
            type="text"
            placeholder=""
            onChange={getName}
            name="name"
            id="name"
            className="formImage-inputeText"
          />
        </div>
        <div className="formImage-file">
          <label>Imagen</label>
          <input
            type="file"
            name="dataImage"
            id="dataImage"
            className="formImage-inputFile"
            onChange={getFile}
          />
        </div>
        <button onClick={saveImage} className="formImage-button">
          Agregar Imagen
        </button>
      </div>
    </div>
  );
};

export default AddImage;
