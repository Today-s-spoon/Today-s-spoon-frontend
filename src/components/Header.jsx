import './Header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon_hackathon from '../assets/icon_hackathon.jpeg';
import Button from '../components/Button.jsx';
import { Outlet } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<header className="Header">
				<div className="logo_container">
					<img className="logo_image" src={icon_hackathon} alt="서비스 로고" />
				</div>
				<div className="nav_container">
					<div className="nav_icon">오늘의 식사 기록</div>
					<div className="nav_icon">식습관 분석</div>
					<div className="nav_icon">오늘의 메뉴 추천</div>
					<Button text={'로그인'} type={'HEADERLOGIN'} onClick={() => navigate('/login/step1')} />
				</div>
			</header>
			<Outlet />
			<footer className="Footer">
				<p>(주) 솜뭉탱이 사업자 정보</p>
				<p>명지대학교(인문) 솜뭉탱이</p>
				<p>대표자 : 이서현, 정유진</p>
				<p>팀원 : 강예린, 이지우, 최서현</p>
				<p>주소 : 서울특별시 서대문구 거북골로 34</p>
			</footer>
		</>
	);
};

export default Header;
