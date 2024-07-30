import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordStep1.css';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const RecordStep1 = () => {
	const navigate = useNavigate();

	return (
		<div className="Record">
			<Header />
			<div className="Record_content">
				<div className="record_description">오늘의 숟가락 기록</div>
				<div className="record_description_2">오늘 먹은 음식들을 기록해보세요</div>
				<Button text={'기록하기'} onClick={() => navigate('/record/step2')} />
			</div>
		</div>
	);
};

export default RecordStep1;
