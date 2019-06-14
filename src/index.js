import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";
import E from "./E";
import F from "./F";

import "./styles.css";
import GithubIcon from "./Icons/Github";

const ClockWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 8rem 0;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 2rem 0 0;
    font-family: Raleway;
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 4rem 0;
  }
`;

const ClockGrids = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 4rem;
  background: #fafafa;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const Heading = styled.div`
  font-family: Raleway;
  text-align: center;

  h1 {
    margin: 2rem 0;
    font-size: 6rem;
  }

  h3 {
    margin: 1rem 0;
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 24px;
      margin: 1rem 0;
    }
    
    h3 {
      font-size: 1rem;
      margin: .5rem 0;
    }

    p {
      font-size: 12px;
      margin: .25rem 0;
    }
  }
`;

const IconLinks = styled.div`
  padding: 1rem 0 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const IconLink = styled.a`
  width: 40px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;

function App() {
  return (
    <div className="App">
      <Heading>
        <h1>Beautiful Wall Clocks</h1>
        <h3>Using React Hooks</h3>
        <p>
          Custom Hook:- <strong>useClock</strong>
        </p>
        <IconLinks>
          <IconLink href="https://github.com/ankurrsinghal/weekly-react-02-beautiful-wall-clocks-using-hooks">
            <GithubIcon />
          </IconLink>
        </IconLinks>
      </Heading>
      <ClockGrids>
        <ClockWrapper>
          <A size={300} />
          <h3>New York</h3>
        </ClockWrapper>
        <ClockWrapper>
          <B size={300} />
          <h3>New Delhi</h3>
        </ClockWrapper>
        <ClockWrapper>
          <C size={300} />
          <h3>Paris</h3>
        </ClockWrapper>
        <ClockWrapper>
          <D size={300} />
          <h3>London</h3>
        </ClockWrapper>
        <ClockWrapper>
          <E size={300} />
          <h3>Tokyo</h3>
        </ClockWrapper>
        <ClockWrapper>
          <F size={300} />
          <h3>Beijing</h3>
        </ClockWrapper>
      </ClockGrids>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
