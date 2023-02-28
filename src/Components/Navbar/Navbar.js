import "./Navbar.css";
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiTakeMyMoney } from 'react-icons/gi';
import { navTab } from './Navbar.tab.js';

export default function Navbar({ onModalChange }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [selected, setSelected] = useState(0)
    const navigation = useNavigate();


    return (
        <nav id="navbar" className="bg-[#191919] w-full fixed top-0 z-50">
            <div className="flex justify-between px-5 py-4 mx-auto">
                <NavLink className={({ isActive }) => { return `flex item-center ${isActive ? 'activeLink' : 'items'}` }} to='/'>
                    <img className="ml-2" src="/logo.png" width={'40%'} alt="logo entreprise" />
                </NavLink>
                <div className="hidden space-x-10 lg:flex">
                    {navTab().map((data, index) => (
                        <button key={index} className={`${selected === index ? "text-[#f5cb5c]" : "text-white"} uppercase text-md no-underline cursor-pointer font-black bg-transparent`}
                            onClick={() => {
                                navigation(data.url);
                                setSelected(index);
                            }}>
                            {data.title}
                        </button>
                    ))}
                    <button onClick={() => onModalChange(true)}
                        className="text-md no-underline text-black cursor-pointer font-black bg-[#f5cb5c] rounded-xl px-4 py-2 flex shadow-2xl">
                        <GiTakeMyMoney className="text-2xl my-auto mr-2" />
                        J'investi
                    </button>
                </div>
                <div className="flex lg:hidden">
                    <button className={`bg-transparent nav-icon3 ${menuOpen && 'open'}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            {menuOpen &&
                <div className={`flex flex-col justify-center text-center h-screen space-y-4 items-center bg-[#191919] -mt-10`}>
                    {navTab().map((data, index) => (
                        <button key={index} onClick={() => {
                            navigation(data.url);
                            setMenuOpen(false);
                            setSelected(index)
                        }}
                            className={`${selected === index ? "text-[#f5cb5c]" : "text-white"} text-4xl no-underline cursor-pointer font-black bg-transparent`}>{data.title}</button>
                    ))}
                    <button onClick={() => {
                        onModalChange(true);
                        setMenuOpen(false);
                    }}
                        className="text-2xl no-underline text-black cursor-pointer font-black bg-[#f5cb5c] rounded-xl px-8 py-2 mt-5 flex">
                        <GiTakeMyMoney className="text-3xl my-auto mr-2" />
                        J'investi
                    </button>
                </div>}

        </nav>
    )
}
