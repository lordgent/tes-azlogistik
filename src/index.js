import './index.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ProductPage,AddProductPage,EditProductPage} from './pages'
import Layout from "./components/layouts/layouts";
import { createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './store/store'

const store = createStore(rootReducer  );


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout children={<ProductPage/>} />
    ),
  },
  {
    path: "/add",
    element: (
      <Layout children={<AddProductPage/>} />
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <Layout children={<EditProductPage/>} />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
);