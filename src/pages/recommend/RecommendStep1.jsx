import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RecommendStep1.css';
import Header from '../../components/Header.jsx';
import Dashboard from '../../components/Dashboard.jsx';

const RecommendStep1 = ({ userId }) => {
	const navigate = useNavigate();
	const [recommendedFoods, setRecommendedFoods] = useState([]); // 추천 음식을 저장할 상태

	useEffect(() => {
		const fetchRecommendedFoods = async () => {
			try {
				const response = await axios.get(`/recommendation/${userId}/foods`);
				setRecommendedFoods(response.data); // 응답 데이터를 상태에 저장
			} catch (error) {
				console.error('음식 목록을 불러오는 중 오류 발생:', error);
			}
		};

		fetchRecommendedFoods();
	}, [userId]);

	return (
		<div className="Recommend">
			<Header />
			<div className="recommend_content">
				<Dashboard />
				<div className="white_section">
					<div className="white_section_wrapper">
						<div className="white_section_des">
							<div className="white_section_des_1">오늘의 숟가락</div>
							<div className="white_section_des_2">이 추천하는 영양 맞춤 식사</div>
						</div>
						<div className="recommend_food_wrapper">
							{recommendedFoods.map((food, index) => (
								<div className="recommend_food_set" key={index}>
									<div className="recommend_food_img">
										<img src={food.imageUrl} alt={food.name} /> {/* 음식 이미지 URL */}
									</div>
									<div className="recommend_food_des">{food.name}</div> {/* 음식 이름 */}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecommendStep1;
