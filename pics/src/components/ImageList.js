import React from "react";

import "./ImageList.css";

const ImageList = ({ images }) => {
  const htmlImages = images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div className="image-list">{htmlImages}</div>;
};

export default ImageList;
