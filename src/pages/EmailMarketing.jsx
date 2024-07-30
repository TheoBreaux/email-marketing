import { images } from "../index.js";
import { useNavigate } from "react-router-dom";
import "./EmailMarketing.css";
import CTA from "../components/CTA.jsx";

const EmailMarketing = () => {
  const navigate = useNavigate();

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`);
  };

  const navigateToExternalPage = () => {
    window.location.href = "https://www.theodorebreaux.com"; // Replace with your desired URL
  };

  return (
    <section>
      <div className="logo-container" onClick={navigateToExternalPage}>
        <p className="logo">TB</p>
      </div>

      <h1 className="email-marketing-header">
        Email <span className="highlit-text">Marketing Portfolio</span>
      </h1>

      <div>
        <p className="bio-text">
          Over the past few years, I have developed a strong proficiency in
          various technical and marketing areas, particularly using Klaviyo to
          manage email marketing campaigns for OMG Sportswear USA and Circuit
          Rave Gear. I excel at designing and implementing targeted email
          marketing campaigns that engage audiences and boost conversion rates.
          My skills include creating engaging content, strategically segmenting
          email lists, and analyzing campaign data to drive continuous
          improvement.
        </p>
      </div>

      <div>
        <h3 className="email-marketing-header">
          My <span className="highlit-text">Campaigns</span>
        </h3>
        <div className="image-container">
          {Object.keys(images).map((imageName) => (
            <div key={imageName}>
              <img
                src={images[imageName]}
                alt={imageName}
                onClick={() => handleImageClick(imageName)}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>

      <hr />
      <CTA />
    </section>
  );
};

export default EmailMarketing;
