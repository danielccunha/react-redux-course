import React from "react";
import ImageCard from "./ImageCard";

import "./ImageList.css";

const ImageList = ({ images }) => {
  const htmlImages = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{htmlImages}</div>;
};

export default ImageList;
