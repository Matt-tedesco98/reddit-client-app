import react, { useState, useEffect } from "react";
import { SiReddit } from "react-icons/si";
import { HiOutlineSearchCircle } from "react-icons/hi";
import './Header.css';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const onSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header>
            <div className="logo">
                <SiReddit className="logo-icon"/>
                <p>Meddit</p>
            </div>
            <form className="search">
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Search"
                    onChange={onSearchChange}
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