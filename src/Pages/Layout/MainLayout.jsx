import React from 'react';
import UpperNav from '../../Shared/NavBar/UpperNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <UpperNav />

            {/* define outlet */}
            <div className='container mx-auto'>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;