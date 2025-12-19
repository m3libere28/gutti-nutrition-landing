import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const AppLayout = () => {
    return (
        <>
            <div className="app-content" style={{ paddingBottom: '90px' }}> {/* Space for bottom nav */}
                <Outlet />
            </div>
            <BottomNav />
        </>
    );
};

export default AppLayout;
