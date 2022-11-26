import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { AuthContext } from '../../Context/AuthProvider';

const DashboardLayout = () => {


    const sellerMenu = <>
        <li><Link to="/dashboard/myProducts">My Products</Link></li>
        <li><Link to="/dashboard/myBuyers">My Buyers</Link></li>
        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
    </>
    const buyerMenu = <>
        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
    </>
    const adminMenu = <>
        <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
        <li><Link to="/dashboard/allSeller">All Seller</Link></li>
        <li><Link to="/dashboard/ReportedItems">Reported Items</Link></li>
    </>

    let menu = buyerMenu;

    const [userInfo, setUserInfo] = useState({})
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setUserInfo(data)
            })
    }, [user.email])
    if (userInfo.role === 'seller') {
        menu = sellerMenu
    } else if (userInfo.role === 'admin') {
        menu = adminMenu
    }


    return (
        <div>
            <Header></Header>


            <div className="drawer drawer-mobile max-w-[1220px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {menu}
                    </ul>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;