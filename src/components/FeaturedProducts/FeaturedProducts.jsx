import React from "react";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import productData from "../../data/productData";

function FeaturedProducts() {
  return (
    <section className="pv-products">

      <h2 className="pv-products-heading">
        BEST OF PRAKRUTIVEDA
      </h2>

      <h2 className="pv-products-heading">
        FEATURED PRODUCTS
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.05,
          },
          480: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="pv-product-card">

              <div className="pv-product-image-box">
                <img
                  src={product.image}
                  alt={product.name}
                  className="pv-product-image"
                />
              </div>

              <div className="pv-product-content">

                <h3>{product.name}</h3>

                <p>{product.price}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="pv-view-btn"
                >
                  View Product
                </Link>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default FeaturedProducts;