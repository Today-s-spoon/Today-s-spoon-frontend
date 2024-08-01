import "./Carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  //console.log(data);
  //data.data[0].imgsrc 맨앞에 data 까지만 자유가있음.
  return (
    <>
      <div className="carousel_items">
        <div className="carousle_items_left">
          <div className="img_holder">
            <img
              src={
                data.data[0].imgsrc !== "" ? data.data[0].imgsrc : "/book.png"
              }
              alt="음식사진"
            />
          </div>
          <div className="img_title">
            <p>
              {data.data[0].title}({data.data[0].calories})
            </p>
          </div>
        </div>
        <div className="carousle_items_right">
          <div className="title">
            <p>
              <span>솜뭉탱이</span> 님 오늘 이만큼 섭취하셨어요!
            </p>
          </div>
          <div className="box">
            <div className="box_left">
              {/* <p>단백질</p>
              <p>지방</p>
              <p>탄수화물</p> */}
              {Object.keys(data.data[0].details).map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
            <div className="box_right">
              {/* <p>{data.proteinAmount}</p>
              <p>{data.fatAmount}</p> */}
              {Object.values(data.data[0].details).map((v, i) => (
                <p key={i}>
                  {v.split(" ")[0]}
                  <span>
                    {v.split(" ")[1]} {v.split(" ")[2]}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
