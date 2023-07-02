import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import AllProducts from "./components/AllProducts";
import AdminLogin from "./components/AdminLogin";
import AdminAddProduct from "./components/AdminAddProduct";
import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AdminAllProducts from "./components/AdminAllProducts";
import AdminUpdateProduct from "./components/AdminUpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const userData = localStorage.getItem('user')
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        //private route for user
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path={userData ? `/user/${JSON.parse(userData)._id}` : ''} element={<Profile />} />
        </Route>

        //public route for everyone
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<AllProducts />} />

        //private route for admin

        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin/product/add" element={<AdminAddProduct />}/>
          <Route path="/admin/products" element={<AdminAllProducts />}/>
          <Route path="/admin/product/update/:id" element={<AdminUpdateProduct />}/>
      </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
