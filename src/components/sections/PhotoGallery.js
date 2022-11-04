import React, { useState } from 'react';
import Link from 'next/link';
import NextImageLoader from '../utils/NextImageLoader';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const PhotoGallery = ({ imgCount = 6, homePage = false }) => {
  const [curImg, setCurImg] = useState();

  return (
    <section id=" gallery">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2>
          <span className="highlight">Moments</span> Captured
        </h2>

        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      {/* <!-- .tm-portfolio-filter-area --> */}
      <div className="container text-center">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {[...Array(imgCount)].map((e, i) => {
              return (
                <div
                  className="m-1"
                  key={i + 1}
                  onClick={() => setCurImg(i + 1)}
                >
                  <NextImageLoader
                    src={`/assets/photo_gallery/${i + 1}.webp`}
                    alt={`The Institute of Real Homeo`}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
        {homePage && (
          <div className="d-flex justify-content-end">
            <Link href="/gallery">
              <a className="highlight px-3 py-1">More..</a>
            </Link>
          </div>
        )}
        <div className="row tm-portfolio zoom-gallery tm-gutter-less "></div>
      </div>
      {/* <!-- .portfolio --> */}
    </section>
  );
};

export default PhotoGallery;
