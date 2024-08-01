import book from "../assets/book.png";
import chart from "../assets/chart.png";
import cart from "../assets/cart.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import "./HomeThirdSection.css";

const HomeThirdSection = () => {
  return (
    <section className="third_section">
      <div className="third_section_title">
        <p>차트를 통해 한눈에 보는</p>
        <p style={{ color: "#43977D" }}>식단 분석 서비스</p>
        <div className="third_section_chart_wrapper">
          <div>
            <img src={chart} alt="차트 이미지" />
          </div>
          <div
            className="today_spoon_record_explain"
            style={{ margin: "4rem 0" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                display: "inline-block",
                textAlign: "left",
                margin: 0,
              }}
            >
              <img
                src={book}
                alt="book icon"
                style={{ marginRight: "20px", verticalAlign: "middle" }}
              />
              정확한 식습관 분석 정보 제공
            </p>
            <p>
              차트를 통한 <br /> 간편한 분석정보 확인
            </p>

            <p
              style={{
                fontSize: "22px",
                color: "#43977D",
                fontWeight: "200",
              }}
            >
              칼로리, 섭취 영양 정보 등 음식 섭취를 통한 정보를 차트를 통해 한
              눈에 알아볼 수 있도록 제공합니다.
            </p>
          </div>
        </div>

        <div className="third_section_chart_wrapper">
          <div className="today_spoon_record_explain">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                display: "inline-block",
                textAlign: "left",
                margin: 0,
              }}
            >
              <img
                src={cart}
                alt="cart icon"
                style={{ marginRight: "20px", verticalAlign: "middle" }}
              />
              식습관 분석을 토대로 맞춤 메뉴 추천
            </p>
            <p>
              내 몸에 딱 맞는 <br /> 맞춤 메뉴, 식단 추천
            </p>

            <p
              style={{
                fontSize: "22px",
                color: "#43977D",
                fontWeight: "200",
              }}
            >
              더 이상 무엇을, 어떻게 먹어야 할 지 고민하지 마세요. 사용자의
              식습관 자료를 통해 내 몸에 부족한 영양을 채워줄 수 있는 영양 맞춤
              메뉴를 추천해드려요.
            </p>
          </div>
          <div className="box2">
            <div className="box2_title">
              <p>
                <span>오늘의 숟가락</span>이 추천하는 영양 맞춤 식사
              </p>
            </div>
            <div className="img_wrapper">
              <div>
                <img src={food1} alt="음식 사진" />
                <p>샤브샤브</p>
              </div>
              <div>
                <img src={food2} alt="음식 사진" />
                <p>메밀소바</p>
              </div>
              <div>
                <img src={food3} alt="음식 사진" />
                <p>비빔밥</p>
              </div>
              <div>
                <img src={food4} alt="음식 사진" />
                <p>샌드위치</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThirdSection;
