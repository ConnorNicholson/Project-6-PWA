import React from 'react'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import '../lib/css/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Home() {
    return (
      <div className="header">
        <HomeHeader />
        <main className="index-main">
          <h2 className="slider-header">Product Showcase:</h2>
          <div className="slider-container">
            <Carousel width="100%" infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
              <div className="img-container">
                <img className="carousel-img" src="https://res.cloudinary.com/connorn/image/upload/v1564194479/Assets%20ECommerce/Orion_closeup_atchf8.jpg" alt="Closeup of Orion telescope"/>
              </div>
              <div className="img-container">
                <img className="carousel-img" src="https://res.cloudinary.com/connorn/image/upload/v1564195050/Assets%20ECommerce/brass_nautical_sextant_dkesfr.jpg" alt="Box set of a brass nautical sextant"/>
              </div>
              <div className="img-container">
                <img className="carousel-img" src="https://res.cloudinary.com/connorn/image/upload/v1564195377/Assets%20ECommerce/Antique_copper_griffith_astro_telescope_wiigd3.jpg" alt="Antique copper telescope"/>
              </div>
              <div className="img-container">
                <img className="carousel-img" src="https://res.cloudinary.com/connorn/image/upload/v1564195572/Assets%20ECommerce/Orion_27191_StarBlast_rk4gd8.jpg" alt="Electronic Orion telescope on a round turntable"/>
              </div>
              <div className="img-container">
                <img className="carousel-img" src="https://res.cloudinary.com/connorn/image/upload/v1564195740/Assets%20ECommerce/Meade-12-Inch-ACF_wrhnhv.jpg" alt="High-powered Meade telescope on a swivel tripod"/>
              </div>
            </Carousel>
          </div>
        </main>
        <Footer />
      </div>
    )
}

export default Home;