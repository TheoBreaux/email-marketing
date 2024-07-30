/* eslint-disable react/no-unescaped-entities */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import EmailMarketing from "./pages/EmailMarketing";
import ImagePage from "./pages/ImagePage";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<EmailMarketing />} />
          <Route path="/image/:imageName" element={<ImagePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
