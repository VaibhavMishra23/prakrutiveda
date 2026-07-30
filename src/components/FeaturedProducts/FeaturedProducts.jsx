import React from "react";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";
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

      <div className="pv-products-grid">
        {productData.map((product) => (
          <div className="pv-product-card" key={product.id}>

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
        ))}
      </div>

    </section>
  );
}

export default FeaturedProducts;