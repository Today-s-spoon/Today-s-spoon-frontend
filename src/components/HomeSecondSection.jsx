import { Link } from "react-router-dom";
import "./HomeSecondSection.css";
import diary_img from "../assets/journals.png";
import graph from "../assets/graph.png";
import cup from "../assets/cup.png";
import food from "../assets/food.png";
import arrow from "../assets/arrow.png";
import options from "../assets/options.jpeg";
import analyze from "../assets/analyze.png";

const HomeSecondSection = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return (
    <section className="second_section">
      <div className="section_first_title">
        <p>오늘의 숟가락을 통해</p>
        <p>어떤 기능을 이용하고 싶으세요?</p>
      </div>
      <div className="section_menus">
        <Link to={`/record/`}>
          <div>
            <p>
              오늘의 <br /> 식사 기록
            </p>
            <img src={diary_img} alt="저널 아이콘" />
          </div>
        </Link>
        <Link to={`/analysis/${year}-${month}-${date}`}>
          <div>
            <p>
              정확한 <br /> 식습관 분석
            </p>
            <img src={graph} alt="그래프 아이콘" />
          </div>
        </Link>
        <Link to="/menu">
          <div>
            <p>
              맞춤 메뉴 <br /> 추천
            </p>
            <img src={cup} alt="컵 아이콘" />
          </div>
        </Link>
      </div>
      <div className="section_second_title">
        간편한 식사 정보 작성 <br />
        오늘의 숟가락과 함께하세요.
        <p>간편하게 기록하는 하루 식사, 숟가락 기록!</p>
      </div>

      <div className="today_spoon_record">
        <p>오늘의 숟가락 기록</p>
        <div className="today_spoon_record_first">
          <div>
            <img src={food} alt="음식 사진" />
          </div>
          <div className="bubble">
            <div>음식을 선택해주세요</div>
            <div>몇 인분을 섭취하셨나요?</div>
          </div>
          <div>
            <img src={arrow} alt="화살 아이콘" />
          </div>
          <div style={{ marginTop: "3rem" }}>
            <div>
              <img src={options} alt="옵션 목록" />
            </div>
            <p className="bottom">
              메뉴, 양 선택을 통한 <br /> 간편한 기록
            </p>
          </div>
        </div>
        <div className="today_spoon_record_second">
          <div className="title">
            <p>
              <span>솜뭉탱이</span> 님 이만큼이 부족해요!
            </p>
          </div>
          <div className="today_spoon_record_second_wrapper">
            <div className="box">
              <div className="box_left">
                <p>단백질</p>
                <p>비타민A</p>
                <p>탄수화물</p>
                <p>식이섬유</p>
              </div>
              <div className="box_right">
                <p>
                  22g <span>/ 55g</span>
                </p>
                <p>
                  300μg <span>/ 650μg</span>
                </p>
                <p>
                  75g <span>/ 150g</span>
                </p>
                <p>
                  10g <span>/ 25g</span>
                </p>
              </div>
            </div>
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
                  src={analyze}
                  alt="analyze icon"
                  style={{ marginRight: "20px", verticalAlign: "middle" }}
                />
                정확한 식습관 분석 정보 제공
              </p>
              <p>
                기록을 통한 <br /> 정확한 식습관 분석
              </p>
              <div>
                <p
                  style={{
                    fontSize: "22px",
                    color: "#43977D",
                    fontWeight: "200",
                  }}
                >
                  무엇을 얼만큼 더 섭취해야 하는지 한눈에 알아볼 수 있도록
                  제공해드려요. 오늘의 숟가락이 사용자의 기록 정보를 분석하여
                  정확한 식습관 정보를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecondSection;
