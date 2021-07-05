import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <div className="nav">
            <h1 className='head p'>Live Cricket Score</h1>
                <NavLink exact className='menu' activeClassName='active_class' to='/'>others</NavLink>
                <NavLink exact className='menu' activeClassName='active_class' to='/oneday'>One Day</NavLink>
                <NavLink exact className='menu' activeClassName='active_class' to='/twenty20'>T-20</NavLink>
            
        </div>
        </>
    );
}

export default Navbar;