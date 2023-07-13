import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex flex-sb">
            <Link to="/" className="navbar-brand text-uppercase fw-4 text-white ls-2 fs-16">
              Jearmy Jwellery
            </Link>
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>

            <div className={navToggler ? 'navbar-collapse show-navbar-collapse' : 'navbar-collapse'}>
              <button type="button" className="navbar-close-btn text-white" onClick={closeNavbar}>
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    onClick={toggleCategories}
                  >
                    Jwellery
                  </button>
                  {showCategories && (
                    <div className="dropdown-content">
                      <ul>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Thaali
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Chains
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Arams
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Necklaces
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Chains
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                          >
                            Earings
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                  )}
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">
                    Collections
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">
                    Exclusive
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
