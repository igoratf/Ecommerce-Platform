import React from 'react';
import './HomePage.scss';
import MenuItem from '../../components/MenuItem/MenuItem';
import DirectoryMenu from '../../components/DirectoryMenu/DirectoryMenu';

const HomePage = () => (
    <div className="homepage">
        <DirectoryMenu />
    </div>
)

export default HomePage;