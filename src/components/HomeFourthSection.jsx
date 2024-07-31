import { Link } from "react-router-dom";
import "./HomeFourthSection.css";

const HomeFourthSection = () => {
  return (
    <section className="fourth_section">
      <div className="fourth_section_title">
        <p>
          건강한 식습관, 식사
          <br /> 솔루션
        </p>
      </div>
      <div className="fourth_section_mid">
        <hr />
        상세한 식사 분석으로 시작해요.
        <hr />
      </div>
      <div className="fourth_section_bottom">
        <p>
          <Link to={`/record/`}>식사 기록하러 가기</Link>
        </p>
      </div>
    </section>
  );
};

export default HomeFourthSection;
