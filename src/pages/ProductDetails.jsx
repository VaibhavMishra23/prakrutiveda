import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productData";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "120px" }}>
        Product Not Found
      </h2>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const whatsappNumber = "918827270701";
  const instagramLink = "https://www.instagram.com/poonams_beauty6r/";
  const shareMessage = encodeURIComponent(
    `🌿 Check out this product from Prakriti Veda!

${product.name}
💰 Price: ${product.price}

${window.location.href}`,
  );

  const shareLink = `https://wa.me/?text=${shareMessage}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Prakruti Veda,

I'm interested in purchasing the following product.

🌿 Product : ${product.name}
💰 Price : ${product.price}

Please share more details. Thank you!`,
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="pv-detail">
      <div className="pv-detail-container">
        {/* Left Section */}

        <div className="pv-detail-left">
          <div className="pv-main-image">
            <img src={selectedImage} alt={product.name} />
          </div>

          <div className="pv-image-list">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className={selectedImage === image ? "active" : ""}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="pv-detail-right">
          <h1>{product.name}</h1>

          <span className="pv-detail-deal">{product.deal}</span>

          <div className="pv-detail-price">
            <span className="pv-detail-original">{product.originalPrice}</span>

            <span className="pv-detail-current">{product.price}</span>
          </div>

          <p className="pv-detail-short">{product.shortDescription}</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pv-detail-buy"
          >
            🛒 Order on WhatsApp
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pv-detail-instagram"
          >
            📷 Order on Instagram
          </a>
          <a
            href={shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pv-detail-share"
          >
            📤 Share on WhatsApp
          </a>
        </div>
      </div>
      <div className="pv-detail-section">
        <h2>Description</h2>

        {product.detailDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="pv-detail-section">
        <h2>Benefits</h2>

        <ul>
          {product.benefits.map((benefit, index) => (
            <li key={index}>✅ {benefit}</li>
          ))}
        </ul>
      </div>

      <div className="pv-detail-section">
        <h2>Ingredients</h2>

        <ul>
          {product.ingredients.map((item, index) => (
            <li key={index}>🌿 {item}</li>
          ))}
        </ul>
      </div>

      <div className="pv-detail-section">
        <h2>How To Use</h2>

        <ol>
          {product.howToUse.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* <div className="pv-detail-section">

        <h2>Customer Reviews</h2>

        {product.reviews.map((review, index) => (

          <div
            key={index}
            className="pv-review-card"
          >

            <h4>{review.name}</h4>

            <p>{"⭐".repeat(review.rating)}</p>

            <span>{review.comment}</span>

          </div>

        ))}

      </div> */}
    </section>
  );
}

export default ProductDetails;
