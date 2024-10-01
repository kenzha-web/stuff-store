import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import SingleProduct from "../Products/SingleProduct";
import {ROUTES} from "../utils/routes";

const AppRoutes = (props) => {
    return (
      <Routes>
          <Route path={ROUTES.PRODUCT} element={<SingleProduct/>} />
          <Route index element={<Home/>} />
      </Routes>
    );
}

export default AppRoutes;