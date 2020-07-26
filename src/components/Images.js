import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Error404 from "./Error404";

const Images = ({ dataImages, setDataImages, search }) => {
  const [errorServer, setErrorServer] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        const imgs = await axios.get("http://localhost:8282/getImages");
        setDataImages(imgs.data.images);
        setErrorServer(false);
      } catch (err) {
        setErrorServer(true);
      }
    };
    getImages();
  }, [setDataImages]);

  if (errorServer === true) {
    return <Error404></Error404>;
  } else {
    return (
      <div className="galeria">
        <div className="contenedor-imagenes">
          {dataImages
            .filter((image) => {
              return image.name.indexOf(search) > -1;
            })
            .map((image) => (
              <div className="imagen" key={image._id}>
                <Link to={`/viewImage/${image._id}`}>
                  <img src={image.image} alt={image.name} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default Images;
