import React from 'react';
import HomeDashboard from '../Components/homepage'
import Header from '../Components/header';
import HomeDash from '../Components/homegrafico';

export default function Dashboard() {
    return (
        <div>
            <Header />

            <HomeDashboard />

            <HomeDash/>
        </div>
    );
}