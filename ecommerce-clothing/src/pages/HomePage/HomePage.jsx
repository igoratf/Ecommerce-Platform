import React from 'react';
import './HomePage.scss';
import MenuItem from '../../components/MenuItem/MenuItem';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <MenuItem title="HATS" />
            <MenuItem title="JACKETS" />
            <MenuItem title="SNEAKERS" />
            <MenuItem title="WOMENS" />
            <MenuItem title="MENS" />
        </div>
    </div>
)

export default HomePage;