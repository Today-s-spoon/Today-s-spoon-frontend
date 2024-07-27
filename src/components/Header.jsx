import './Header.css';
import React from 'react';
import icon_hackathon from '../assets/icon_hackathon.jpeg';

const Header = () => {
	return (
		<header className="Header">
			<div className="logo_container">
				<img className="logo_image" src={icon_hackathon} alt="서비스 로고" />
			</div>
			<div className="nav_container">
				<div className="nav_icon">오늘의 식사 기록</div>
				<div className="nav_icon">식습관 분석</div>
				<div className="nav_icon">오늘의 메뉴 추천</div>
				<button className="login_button">로그인</button>
			</div>
		</header>
	);
};

export default Header;
