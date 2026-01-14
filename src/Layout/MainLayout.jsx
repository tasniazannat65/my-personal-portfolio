import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gradient-to-br from-white via-muted-100 to-primary-50'>
            <header>
                <Navbar/>
            </header>
            <main className='min-h-screen'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default MainLayout;