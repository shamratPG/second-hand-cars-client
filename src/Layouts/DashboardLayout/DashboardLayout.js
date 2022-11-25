import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const DashboardLayout = () => {
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
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;