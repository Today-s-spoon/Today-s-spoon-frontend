import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../components/layout';
import Home from '../pages/Home';
import Record from '../pages/Record';
import NotFound from '../pages/NotFound';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="record" element={<Record />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
