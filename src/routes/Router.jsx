import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../components/layout';
import Home from '../pages/Home';
// import Analysis from '../pages/Analysis';
import RecordStep1 from '../pages/record/RecordStep1';
import RecordStep2 from '../pages/record/RecordStep2';
import LoginStep1 from '../pages/login/LoginStep1';
import LoginStep2 from '../pages/login/LoginStep2';
import LoginStep3 from '../pages/login/LoginStep3';
import RecommendStep1 from '../pages/recommend/RecommendStep1';
import NotFound from '../pages/NotFound';
import AnalysisStep1 from '../pages/analysis/AnalysisStep1';
import MyPage from '../pages/MyPage';
import MyModify from '../pages/MyModify';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
					{/* <Route path="/analysis" element={<Analysis />} /> */}
					<Route path="/record/step1" element={<RecordStep1 />} />
					<Route path="/record/step2" element={<RecordStep2 />} />
					<Route path="/login/step1" element={<LoginStep1 />} />
					<Route path="/login/step2" element={<LoginStep2 />} />
					<Route path="/login/step3" element={<LoginStep3 />} />
					<Route path="/recommend/step1" element={<RecommendStep1 />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/analysis/step1" element={<AnalysisStep1 />} />
					<Route path="/mymodify" element={<MyModify />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
