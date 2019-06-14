import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from './Hands'

const Mark = styled.div`
  position: absolute;
  width: 1px;
  height: 30px;
  background: black;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  transform: rotate(${props => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 130px;
`;

const marks = Array(12).fill();

const Clock = ({ className, size }) => {
  
  const time = useClock('new-york');

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => (
        <Mark key={i} size={size} rotation={i * 30 + "deg"} />
      ))}
      <Hands time={time} />
    </Circle>
  );
};

const StyledClock = styled(Clock)`
  position: relative;
  border: 10px solid black;
  box-shadow: inset 0 0 25px 5px rgba(0, 0, 0, 0.15);
  background: white;
`;

export default StyledClock;
