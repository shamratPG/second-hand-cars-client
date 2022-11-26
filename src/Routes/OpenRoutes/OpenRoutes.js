import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/Dashboard/AdminPages/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminPages/AllSellers";
import ReportedItems from "../../Pages/Dashboard/AdminPages/ReportedItems";
import MyOrders from "../../Pages/Dashboard/BuyerPages/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerPages/AddProduct";
import MyBuyers from "../../Pages/Dashboard/SellerPages/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerPages/MyProducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/ReportedItems',
                element: <ReportedItems></ReportedItems>
            },
        ]
    }
])
export default router;