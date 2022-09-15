import React from "react";
import styled from "styled-components";
import data from "./../data.json";

const HomeContainer = styled.section`
  position: relative;
  max-width: 1480px;
  width: 100%;
  padding: 0 20px;

  /* .home__container {
    display: flex;
    flex-direction: column;
  } */
  .home__wrapper {
    display: flex;
    justify-content: space-between;
  }
  .home__wrapper:nth-child(2) {
    flex-direction: row-reverse;
  }
  .home__wrapper:nth-child(2) .home__infos,
  .home__wrapper:nth-child(3) .home__infos {
    background-color: #fff;
    color: #000;
  }
  .home__infos {
    max-width: 610px;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .home__infos__wrapper {
    width: 65%;
    margin: auto;
  }
  .home__wrapper:nth-child(1) picture {
    height: 650px;
  }
  svg{
    color: #000;
  }
  .home__wrapper:nth-child(1) svg {
    margin-left: 15px;
  }
  picture {
    max-width: 830px;
    height: 600px;
    width: 100%;
  }
  picture img {
    width: 100%;
    height: 100%;
  }
  .home__title {
    text-transform: uppercase;
    font-size: 3.2rem;
    line-height: 1;
  }
  .home__txt {
    padding: 30px 0;
  }
  
`;

console.log();
function Home() {
  const infos = data.home;
  return (
    <HomeContainer>
      <div className="home__container">
        {infos.map((elem) => (
          <div className="home__wrapper" key={elem.id}>
            <div className="home__infos">
              <div className="home__infos__wrapper">
                <div className="home__title">{elem.title}</div>
                <div className="home__txt">{elem.txt}</div>
                <div className="home__cta">{elem.cta} 
                <svg
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg></div>
              </div>
            </div>
            <picture className="home__img">
              <img src={elem.img_desktop} alt="photosnap" />
             
            </picture>
          </div>
        ))}
      </div>
    </HomeContainer>
  );
}

export default Home;
