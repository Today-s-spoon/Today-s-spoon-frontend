import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = ({ children }) => {
	return <div>{children || <Outlet />}</div>;
};

export default DefaultLayout;
