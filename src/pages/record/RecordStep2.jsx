import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordStep2.css';
import UploadImage from '../../assets/upload_image.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';

const RecordStep2 = () => {
	const navigate = useNavigate();

	return (
		<div className="Record_2">
			<Header />
			<div className="Record_content2">
				<div className="section1">
					<div className="img_section">
						<img src={UploadImage} alt="업로드 이미지" className="img" />
					</div>
					<div className="select_section">
						<div className="title">오늘의 숟가락 기록</div>
						<select name="" id="" className="select">
							<option value="">샤브샤브</option>
							<option value="">메밀소바</option>
							<option value="">비빔밥</option>
							<option value="">육회덮밥</option>
						</select>
						<select name="" id="" className="select">
							<option value="">1인분</option>
							<option value="">2인분</option>
							<option value="">3인분</option>
							<option value="">4인분</option>
						</select>
					</div>
				</div>
				<div className="section2">
					<Button text={'분석 결과 보러가기'} onClick={() => navigate('/analysis')} />
				</div>
			</div>
		</div>
	);
};

export default RecordStep2;
