import React from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import { FaUsers, FaCheckCircle, FaLeaf, FaTruck } from "react-icons/fa";

function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts />
      <section className="advantages">

      <div className="advantage-item">
        <FaUsers className="advantage-icon" />
        <div>
          <h3>1000+</h3>
          <p>Happy Customers</p>
        </div>
      </div>

      <div className="advantage-item">
        <FaCheckCircle className="advantage-icon" />
        <div>
          <h3>100%</h3>
          <p>Verified Products</p>
        </div>
      </div>

      <div className="advantage-item">
        <FaLeaf className="advantage-icon" />
        <div>
          <h3>100%</h3>
          <p>Natural Ingredients</p>
        </div>
      </div>

      <div className="advantage-item">
        <FaTruck className="advantage-icon" />
        <div>
          <h3>Fast</h3>
          <p>Customer Support</p>
        </div>
      </div>

    </section>
    </>
  );
}

export default Home;