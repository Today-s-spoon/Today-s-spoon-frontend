import './Header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon_hackathon from '../assets/icon_hackathon.jpeg';
import Button from '../components/Button.jsx';

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className="Header">
			<div className="logo_container" onClick={() => navigate('/')}>
				<img className="logo_image" src={icon_hackathon} alt="서비스 로고" />
			</div>
			<div className="nav_container">
				<div className="nav_icon" onClick={() => navigate('/record/step1')}>
					오늘의 식사 기록
				</div>
				<div className="nav_icon" onClick={() => navigate('/analysis/step1')}>
					식습관 분석
				</div>
				<div className="nav_icon" onClick={() => navigate('/recommend/step1')}>
					오늘의 메뉴 추천
				</div>
				<Button text={'로그인'} type={'HEADERLOGIN'} onClick={() => navigate('/login/step1')} />
			</div>
		</header>
	);
};

export default Header;
