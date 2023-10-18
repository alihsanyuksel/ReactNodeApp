import React from 'react';
import './Header.css';
import {Outlet, Link} from 'react-router-dom';


function Header() {
    return(
        <>
        <div className='header'>
            <ul className='header-left'>
                <li className="logo"><Link to='/'>Book Library</Link></li>
            </ul>
            <ul className='header-right'>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to='/'>View</Link></li>
            </ul> 
        </div>
        <Outlet />
        </>
    );
}

export default Header;