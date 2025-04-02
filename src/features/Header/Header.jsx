import react, { useState, useEffect } from "react";
import { SiReddit } from "react-icons/si";
import { HiOutlineSearchCircle } from "react-icons/hi";
import './Header.css';


const Header = () => {
    return (
        <header>
            <div className="logo">
                <SiReddit className="logo-icon"/>
                <p>Meddit</p>
            </div>
            <form className="search">
                <input
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
            <button type="submit" aria-label="Search">
                <HiOutlineSearchCircle />
            </button>

            </form>
        </header>
    );
}

export default Header;