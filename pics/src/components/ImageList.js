import React from "react";

const ImageList = ({ images }) => {
  const imgs = images.map(({ id, urls, description }) => {
    console.log(urls);
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{imgs}</div>;
};

export default ImageList;
