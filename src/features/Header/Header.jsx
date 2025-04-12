import react, { useState, useEffect } from "react";
import { SiReddit } from "react-icons/si";
import { HiOutlineSearchCircle } from "react-icons/hi";
import './Header.css';
import { setSearchTerm} from "../Subreddits/redditSlice";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState("");
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {

        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTermLocal(searchTermLocal));
    }

    return (
        <header>
            <div className="logo">
                <SiReddit className="logo-icon"/>
                <p>Meddit</p>
            </div>
            <form className="search" onSubmit={onSearchSubmit}>
                <input
                    type="text"
                    value={searchTermLocal}
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