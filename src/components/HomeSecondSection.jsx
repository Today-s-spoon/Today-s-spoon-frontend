import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSecondSection.css';
import diaryImg from '../assets/journals.png';
import graph from '../assets/graph.png';
import cup from '../assets/cup.png';
import food from '../assets/food.png';
import arrow from '../assets/arrow.png';
import options from '../assets/options.jpeg';
import analyze from '../assets/analyze.png';

const HomeSecondSection = () => {
	return (
		<section className="second-section">
			<div className="section-first-title">
				<p>오늘의 숟가락을 통해</p>
				<p>어떤 기능을 이용하고 싶으세요?</p>
			</div>
			<div className="section-menus">
				<Link to="/record">
					<div className="menu-item">
						<p>
							오늘의 <br /> 식사 기록
						</p>
						<img src={diaryImg} alt="저널 아이콘" />
					</div>
				</Link>
				<Link to="/analysis">
					<div className="menu-item">
						<p>
							정확한 <br /> 식습관 분석
						</p>
						<img src={graph} alt="그래프 아이콘" />
					</div>
				</Link>
				<Link to="/menu">
					<div className="menu-item">
						<p>
							맞춤 메뉴 <br /> 추천
						</p>
						<img src={cup} alt="컵 아이콘" />
					</div>
				</Link>
			</div>
			<div className="section-second-title">
				간편한 식사 정보 작성 <br />
				오늘의 숟가락과 함께하세요.
				<p>간편하게 기록하는 하루 식사, 숟가락 기록!</p>
			</div>

			<div className="today-spoon-record">
				<p className="tsr-title">오늘의 숟가락 기록</p>
				<div className="today-spoon-record-first">
					<div>
						<img src={food} alt="음식 사진" />
					</div>
					<div className="bubble">
						<div>음식을 선택해주세요</div>
						<div>몇 인분을 섭취하셨나요?</div>
					</div>
					<div className="arrow">
						<img src={arrow} alt="화살 아이콘" />
					</div>
					<div className="options">
						<img src={options} alt="옵션 목록" />
						<p className="tsr-bottom">
							메뉴, 양 선택을 통한 <br /> 간편한 기록
						</p>
					</div>
				</div>
			</div>
			<div className="today-spoon-record-second">
				<div className="record-second-1">
					<div className="title">
						<p>
							<span>솜뭉탱이</span> 님 이만큼이 부족해요!
						</p>
					</div>
					<div className="today-spoon-record-second-wrapper">
						<div className="box">
							<div className="box-left">
								<p>단백질</p>
								<p>비타민A</p>
								<p>탄수화물</p>
								<p>식이섬유</p>
							</div>
							<div className="box-right">
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
					</div>
					<div className="record-second-2">
						<div className="today-spoon-record-explain">
							<div className="tss-header">
								<img src={analyze} alt="analyze icon" className="e-img" />
								<p className="tss-e">정확한 식습관 분석 정보 제공</p>
							</div>
							<p className="tss-x">
								기록을 통한 <br /> 정확한 식습관 분석
							</p>
							<div>
								<p className="tss-explain">
									무엇을 얼만큼 더 섭취해야 하는지 한눈에 알아볼 수 있도록 제공해드려요. 오늘의 숟가락이 사용자의 기록
									정보를 분석하여 정확한 식습관 정보를 제공합니다.
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
