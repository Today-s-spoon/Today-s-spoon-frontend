import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordStep2.css';
import UploadImage from '../../assets/upload_image.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import axiosInstance from '../../libs/api/instance';
import useTokenStore from '../../store/useTokenStore.js';
import getUserId from '../../libs/api/getUserId'; // getUserId 함수 import

const RecordStep2 = () => {
	const [userId, setUserId] = useState(null); // userId 상태 추가
	const [foodList, setFoodList] = useState([]);
	const [selectedFood, setSelectedFood] = useState(null);
	const [amount, setAmount] = useState(1);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserId = async () => {
			const userId = await getUserId(); // userId 가져오기
			setUserId(userId); // userId 상태 업데이트
		};

		fetchUserId(); // 컴포넌트가 마운트될 때 userId 가져오기
	}, []);

	console.log(userId);

	useEffect(() => {
		const fetchFoodLists = async () => {
			try {
				const response = await axiosInstance.get('/api/foods');
				if (Array.isArray(response.data)) {
					const _foodList = [...response.data];
					setFoodList(_foodList);
					setSelectedFood(_foodList[0]);
				} else {
					throw new Error('Unexpected response format');
				}
			} catch (e) {
				console.error('Error fetching food lists:', e.response ? e.response.data : e.message);
				alert('데이터를 불러오는 중 오류가 발생했습니다.');
			}
		};
		fetchFoodLists(); // 컴포넌트가 마운트될 때 음식 리스트 불러오기
	}, []);

	const fetchFoodDetail = async (foodId) => {
		try {
			const response = await axiosInstance.get(`/api/foods/${foodId}`);
			setSelectedFood(response.data);
		} catch (e) {
			console.error('Error fetching food detail:', e.response ? e.response.data : e.message);
			alert('데이터를 불러오는 중 오류가 발생했습니다.');
		}
	};

	const handleChangeFood = (e) => {
		const selectedFoodId = e.target.value;
		if (selectedFoodId) {
			fetchFoodDetail(selectedFoodId); // 선택한 음식의 상세 정보 가져오기
		} else {
			setSelectedFood(null); // 선택이 없을 경우 초기화
		}
	};

	const handleRecordFood = async () => {
		if (selectedFood && userId) {
			const foodId = selectedFood.foodID; // 선택한 음식의 ID
			const amountToRecord = amount; // 선택한 양

			try {
				// POST 요청을 Swagger 명세서에 맞게 수정
				const response = await axiosInstance.post(`/api/${amountToRecord}/${userId}/${foodId}`, {
					amount: amountToRecord, // 요청 본문에 amount 추가
					userId: userId, // 요청 본문에 userId 추가
					foodId: foodId, // 요청 본문에 foodId 추가
				});
				console.log('음식 기록 성공:', response.data);
				alert('음식 기록이 성공적으로 저장되었습니다.');
			} catch (e) {
				console.error(e);
				alert('음식 기록 중 오류가 발생했습니다.');
			}
		} else {
			alert('음식을 선택하거나 사용자 ID를 불러오는 데 문제가 발생했습니다.');
		}
	};

	return (
		<div className="Record_2">
			<Header />
			<div className="Record_content2">
				<div className="section1">
					<div className="img_section">
						<img
							src={selectedFood && selectedFood.imgUrl ? selectedFood.imgUrl : UploadImage}
							alt="업로드 이미지"
							className="img"
						/>
					</div>
					<div className="select_section">
						<div className="title">오늘의 숟가락 기록</div>
						<select className="select" onChange={handleChangeFood}>
							{foodList.length > 0 ? (
								foodList.map((food) => (
									<option value={food.foodID} key={food.foodID}>
										{food.foodName}
									</option>
								))
							) : (
								<option value="" disabled>
									음식이 존재하지 않습니다
								</option>
							)}
						</select>
						<select className="select" onChange={(e) => setAmount(Number(e.target.value))}>
							<option value="1">1인분</option>
							<option value="2">2인분</option>
							<option value="3">3인분</option>
							<option value="4">4인분</option>
						</select>
					</div>
				</div>
				<div className="section2">
					<Button text={'분석 결과 보러가기'} onClick={() => navigate('/analysis/step1')} />
				</div>
			</div>
		</div>
	);
};

export default RecordStep2;
