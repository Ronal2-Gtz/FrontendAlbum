import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ViewImage = () => {
  const [dataImage, setDataImage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDataImage = async () => {
      const dataImage = await axios.get(`http://localhost:8282/getImage/${id}`);
      setDataImage(dataImage.data.image);
    };
    getDataImage();
  }, [id]);

  const deleteImage = async (e) => {
    e.preventDefault()
    confirmAlert({
      title: "Advertencia",
      message: "Seguro que deseas Eliminar la imagen?",
      buttons: [
        {
          label: "Eliminar",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:8282/deleteImage/${id}`);
              window.location.href = "/";
            } catch (error) {}
          },
        },
        {
          label: "Cancelar",
        },
      ],
    });
  };

  const { name, image, date } = dataImage;

  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const fullDate = `${day}-${month}-${year}`;

  return (
    <div className="viewImage">
      <div className="viewImage-container">
        <img src={image} className="viewImage-img" alt="img" />
        <div className="viewImage-info">
          <h1 className="viewImage-h1">{name}</h1>
          <h2 className="viewImage-h2">
            Imagen creada el: {fullDate}-({format(date)})
          </h2>
          <button className="viewImage-button" onClick={deleteImage}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewImage;
