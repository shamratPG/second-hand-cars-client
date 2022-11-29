import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { AuthContext } from '../../Context/AuthProvider';

const DashboardLayout = () => {


    const sellerMenu = <>
        <li><Link to="/dashboard/myProducts">My Products</Link></li>
        <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
    </>
    const buyerMenu = <>
        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
    </>
    const adminMenu = <>
        <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
        <li><Link to="/dashboard/allSeller">All Seller</Link></li>
        <li><Link to="/dashboard/allUsers">All Users</Link></li>
    </>

    let menu = buyerMenu;

    const { user } = useContext(AuthContext);

    const { isLoading, data: userInfo = [] } = useQuery({
        queryKey: ["products", user.email],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/users/${user.email}`).then(res =>
                res.json()
            )
    })
    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    // useEffect(() => {
    //     fetch(`https://second-hand-server-iota.vercel.app/users/${user?.email}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             setUserInfo(data)
    //         })
    // }, [user.email])


    if (userInfo.role === 'seller') {
        menu = sellerMenu
    } else if (userInfo.role === 'admin') {
        menu = adminMenu
    }


    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile max-w-[1220px] mx-auto h-full">
                <input id="side-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="side-menu" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>  */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="side-menu" className="drawer-overlay"></label>
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