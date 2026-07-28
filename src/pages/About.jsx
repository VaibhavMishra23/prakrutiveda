import "./About.css";
import Owner from "../assets/Owner.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="about-left">

        <span className="about-tag">
          🌿 About Prakruti Veda
        </span>

        <h1>
          Nature's Wisdom for
          <span> Healthy Living</span>
        </h1>

        <p>
          At Prakruti Veda, we believe that nature provides the best
          solutions for a healthier life. Our herbal products are
          carefully crafted using traditional Ayurvedic knowledge and
          premium natural ingredients to support your wellness journey.
        </p>

        <div className="about-features">

          <div>
            ✅ 100% Natural Ingredients
          </div>

          <div>
            ✅ Ayurvedic Formulation
          </div>

          <div>
            ✅ Chemical Free
          </div>

          <div>
            ✅ Trusted Quality
          </div>

        </div>

      </div>

      <div className="about-right">

        <img src={Owner} alt="About" />

        <div className="floating-card">
             <h3>Prakruti Veda</h3>
            <p>Founder & Owner</p>
        </div>

    </div>
    </section>
  );
};

export default About;