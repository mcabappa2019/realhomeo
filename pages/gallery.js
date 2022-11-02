import React from 'react';
import PhotoGallery from '../src/components/sections/PhotoGallery';

const Gallery = () => {
  return (
    <div className="container">
      <PhotoGallery imgCount={18} />
      <div className="empty-space col-md-b100 col-xs-b70"></div>
    </div>
  );
};

export default Gallery;
