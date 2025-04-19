import react, { useState, useEffect } from "react";
import { SiReddit } from "react-icons/si";
import { HiOutlineSearchCircle } from "react-icons/hi";
import './Header.css';
import { setSearchTerm} from "../../store/redditSlice";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

    return (
        <header>
            <div className="logo">
                <SiReddit className="logo-icon"/>
                <p>Meddit</p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    value={searchTermLocal}
                    placeholder="Search"
                    onChange={onSearchTermChange}
                    aria-label="Search"
                />
            <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                <HiOutlineSearchCircle />
            </button>

            </form>
        </header>
    );
}

export default Header;