import { Link } from "react-router-dom";
import "./HomeFirstSection.css";

const HomeFirsSection = () => {
  return (
    <section className="first_section">
      <div className="section_wrapper">
        <div className="main_text">
          나만을 위한 <br />
          맞춤 식사 솔루션
        </div>
        <div className="main_btn">
          <Link to="/menu">맞춤 식단 받아보기</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFirsSection;
