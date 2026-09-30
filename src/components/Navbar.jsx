import React from 'react'
import logoImg from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <div className='top-area'>
                <h1 className='logo'>
                    <Link to='/'>
                        <img src={logoImg} alt="myplate" />
                        <span>MY</span><span>PLATE</span>
                    </Link>
                </h1>
            </div>
            <nav className='gnb'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/meals'>식단관리</NavLink>
                <NavLink to='/tips'>건강팁</NavLink>
                <NavLink to='/about'>MY PLATE</NavLink>
            </nav>
        </header>
    )
}

export default Navbar