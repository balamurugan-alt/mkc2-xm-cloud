import React from 'react';
//import NextImage from 'next/image';
import Head from 'next/head';

const RecipeBanner = (): JSX.Element => {
  return (
    <>
      <Head>
        <style>{`
          .fullBanner{
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative; 
          } 

          .fullBanner img{
            object-fit: cover;
            width: 100%;
          }
        `}</style>
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-12 p-0">
                <div className="fullBanner">
                  <img
                    src="https://www.mccormick.com/-/media/project/oneweb/mccormick-us/frenchs/recipes/g/frenchs-green-bean-casserole-recipe.jpg?rev=9a25ddc01f14451cb27ba8fd5117d778&vd=20211118T124414Z&extension=webp&hash=12CABD4BD0BD4FEEDE462BAA5B50A59E"
                    alt="banner"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Default = RecipeBanner;
