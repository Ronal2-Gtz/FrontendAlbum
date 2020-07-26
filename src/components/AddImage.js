import React, { useState } from "react";
import Axios from "axios";

const AddImage = () => {
  const [dataImage, setDataImage] = useState({});
  const [validData, setValidData] = useState({});
  const [name, setName] = useState("");
  const [messague, setMessague] = useState("");
  const [errorForm, setErrorFrom] = useState(false);

  const getName = e => {
    setName(e.target.value);
  };
  const getFile = e => {
    setDataImage(e.target.files[0]);
    setValidData(e.target.files);
  };

  const saveImage = async e => {
    
    e.preventDefault();

    if (name.trim() === "" || Object.keys(validData).length === 0) {
      setErrorFrom(true);
      setMessague("Todos los campos son requeridos")
      return;
    }

    const validExtensions = ["png", "jpg", "gif", "jpeg"];
    const nameImage = dataImage.name.split(".");
    const extensionImage = nameImage[nameImage.length - 1];

    if (validExtensions.indexOf(extensionImage) < 0) {
      setErrorFrom(true);
      setMessague("Extension Invalida")
      return;
    }

    setErrorFrom(false);

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
    <div className="addImage">
      <div className="formImage">
        {errorForm ? <h2 className="error-AddImage">{messague}</h2> : null}
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
