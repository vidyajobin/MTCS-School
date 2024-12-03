import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-8">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt=""
          className={image.className}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
