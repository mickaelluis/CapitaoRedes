import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home.tsx';


const AppRoutes = () => (       
    <Routes >
        <Route path="/" element={<Home />} />       
    </Routes>
);

export default AppRoutes;