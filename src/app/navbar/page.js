"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Footer from "../components/footer";

const Navbar = () => {
  const navRef = useRef();
  const [isMobileView, setMobileView] = useState(true);

  const menuList = ['Showcase', 'Docs', 'Blog', 'Analytics', 'Templates', 'Enterprise'];

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setMobileView(!isMobileView);
  };

  return (
    <>
      <div className="container">
        <header>
          <h4>AEON</h4>
          <nav ref={navRef}>
            {menuList?.map((menu, idx) => (
                <Link href='/' key={idx}>{menu}</Link>
                // we should not use index as a key. But here, I don't have any id so for task only, I used it.
            ))}
            <button className="nav-search-icon">
                <FaSearch />
            </button>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <div className="search">
            <input
              type="search"
              name="search"
              placeholder="Search documentation..."
            />
          </div>
          {isMobileView && (
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          )}
        </header>
      </div>
      <Footer
        isNextBtnShow
        isPrevBtnShow
        prevPagePath={"/calculator"}
        nextPagePath={"/findTargetIndexes"}
      />
    </>
  );
};

export default Navbar;
