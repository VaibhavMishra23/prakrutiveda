import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import productData from "../data/productData";

function Products() {
  return (
    <section className="pv-all-products">
      <div className="pv-products-container">
        <h1 className="pv-products-title">Our Products</h1>

        {productData.map((product) => (
          <div className="pv-product-row" key={product.id}>
            <div className="pv-product-left">
              <img
                src={product.image}
                alt={product.name}
                className="pv-product-img"
              />
            </div>

            <div className="pv-product-right">
              <h2>{product.name}</h2>

              <span className="pv-deal-tag">{product.deal}</span>

              <div className="pv-price-box">
                <span className="pv-original-price">
                  {product.originalPrice}
                </span>

                <span className="pv-current-price">{product.price}</span>
              </div>

              <p className="pv-short-desc">{product.shortDescription}</p>

              <p className="pv-full-desc">{product.description}</p>

              <Link to={`/products/${product.id}`} className="pv-buy-btn">
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
