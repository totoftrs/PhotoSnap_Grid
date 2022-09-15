import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1480px;
  width: 100%;
  padding: 0 20px;
  z-index: 999;
  font-family: "DM Sans";

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  .container {
    width: 100%;
    height: 72px;

    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  picture {
    z-index: 99;
  }
  .ul__desktop {
    display: flex;
    align-items: center;
    list-style: none;

    @media (max-width: 768px) {
      display: none;
    }
  }
  .ul__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    list-style: none;
    padding-bottom: 30px;
  }
  .navbar__links {
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.7rem;
    font-size: 0.8rem;
  }
  .container__mobile .navbar__links {
    font-size: 1.2rem;
  }
  .cta {
    width: 158px;
    height: 40px;
    font-size: 0.9rem;
    background-color: #000;
    color: #fff;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
  }

  .cta__desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .cta__mobile {
    width: 310px;
    margin: auto;
  }

  .navbar__toggle {
    display: none;
  }
  .container__mobile {
    display: none;
  }
  .underline {
    height: 1px;
    width: 310px;
    background-color: #000;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    #mobile-menu {
      display: block;
      z-index: 999;
    }
    .navbar__toggle .bar {
      display: block;
      cursor: pointer;
      width: 25px;
      height: 2px;
      margin: 5px auto;
      transition: all 0.5 ease-in-out;
      background-color: #000;
    }

    .navbar__toggle .bar:first-child.active {
      transform: translateY(0) rotateZ(45deg);
    }
    .navbar__toggle .bar:last-child.active {
      transform: translateY(-7px) rotateZ(-45deg);
    }
    .container__mobile {
      display: grid;
      grid-template-rows: 68% 5px 30%;
      position: absolute;
      left: 0;
      max-height: 48vh;
      height: 100vh;
      width: 100%;
      transition: all 0.8s ease;
      opacity: 1;
      top: -100%;
      font-size: 1.6rem;
      background-color: #fff;
      transition: all 0.5s ease;
    }
    .active {
      top: 0;
    }
  }
`;

function Header() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <Navbar>
      <div className="container">
        <picture>
          <img src="./assets/photosnap.svg" alt="logo" />
        </picture>
        <div className="navbar__toggle" id="mobile-menu" onClick={handleClick}>
          <span className={toggle ? " bar active" : "bar"}></span>
          <span className={toggle ? " bar active" : "bar"}></span>
        </div>
        <ul className="ul__desktop">
          <li>
            <Link to="/stories" className="navbar__links">
              stories
            </Link>
          </li>
          <li>
            <Link to="/features" className="navbar__links">
              features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="navbar__links">
              pricing
            </Link>
          </li>
        </ul>
        <div className="cta__desktop cta">get an invite</div>
        <div
          className={toggle ? "container__mobile active" : "container__mobile"}
        >
          <ul className="ul__mobile">
            <li>
              <Link to="/stories" className="navbar__links">
                stories
              </Link>
            </li>
            <li>
              <Link to="/features" className="navbar__links">
                features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="navbar__links">
                pricing
              </Link>
            </li>
          </ul>
          <div className="underline"></div>
          <div className="cta__mobile cta">get an invite</div>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
