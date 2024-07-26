import './Header.css';
import React from 'react';

const Header = () => {
	return (
		<header>
			<div>
				<img src="../assets/해커톤로고.jpeg" alt="서비스 로고" />
			</div>
			<div>오늘의 식사 기록</div>
			<div>식습관 분석</div>
			<div>오늘의 메뉴 추천</div>
			<div>로그인</div>
		</header>
	);
};

export default Header;
