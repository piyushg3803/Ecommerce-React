import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductList from "./components/productList.jsx";
import Product from "./components/product.jsx";
import NoPage from "./components/NoPage.jsx";
import Cart from "./components/cart.jsx";
import ContextProv from "./context/ContextProv.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<ProductList />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/*" element={<NoPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
