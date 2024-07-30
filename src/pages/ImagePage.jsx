import { useParams, useNavigate } from "react-router-dom";
import { images } from "../index.js";
import "./ImagePage.css";
import CTA from "../components/CTA.jsx";

const ImagePage = () => {
  const { imageName } = useParams();
  const navigate = useNavigate();
  const imageSrc = images[imageName];

  return (
    <section>
      <div className="logo-container" onClick={() => navigate(-1)}>
        <p className="logo">TB</p>
        <button className="btn">Back to Gallery</button>
      </div>

      <div className="image-container">
        <img src={imageSrc} className="html-page-image" alt={imageName} />
        <button onClick={() => navigate(-1)} className="btn">
          Back to Gallery
        </button>
      </div>
      <hr />
      <CTA />
    </section>
  );
};

export default ImagePage;
