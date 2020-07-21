import React, { useEffect, useState } from "react";
import Error404 from "./Error404";
import axios from "axios";
import { Link } from "react-router-dom";

const Images = ({ dataImages, setDataImages, search }) => {

  const [error, setError] = useState(false)

  useEffect(() => {
    const getImages = async () => {
      try {
        const imgs = await axios.get("http://localhost:8282/getImages");
        setDataImages(imgs.data.images);
        setError(false)
      } catch (err) {
        setError(true)
      }
    };
    getImages();
  }, [setDataImages,dataImages]);

  if (error === true) {
    return <Error404></Error404>;
  } else {
    return (
      <div className="linea">
        <div className="container-images">
          {dataImages
            .filter((image) => {
              return image.name.indexOf(search) > -1;
            })
            .map((image) => (
              <div className="image">
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
