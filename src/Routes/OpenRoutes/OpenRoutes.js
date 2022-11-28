import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import AllBuyers from "../../Pages/Dashboard/AdminPages/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminPages/AllSellers";
import ReportedItems from "../../Pages/Dashboard/AdminPages/ReportedItems";
import MyOrders from "../../Pages/Dashboard/BuyerPages/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerPages/AddProduct";
import MyProducts from "../../Pages/Dashboard/SellerPages/MyProducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../PrivateRoutes/SellerRoutes";

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
            {
                path: '/category/:categoryId',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/products/?categoryId=${params.categoryId}`)
                },
                element: <PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>,
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
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myOrders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/allSeller',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/ReportedItems',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
        ]
    }
])
export default router;