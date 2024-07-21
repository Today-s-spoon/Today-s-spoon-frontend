import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefaultLayout from '../components/layout';
import HomePage from '../pages/Home';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<div>Not Found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
