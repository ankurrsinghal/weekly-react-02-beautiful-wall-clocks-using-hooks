import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from './Hands'

const marks = Array(12).fill();

const Dot = styled(Circle)`
  position: absolute;
  background: black;
  top: 10px;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transform: rotate(${props => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 135px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;

const Clock = ({ className, size }) => {
  const time = useClock('paris');

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => (
        <Dot size={4} key={i} rotation={i * 30 + "deg"} />
      ))}
      <Hands time={time} borderWidth={4} />
    </Circle>
  );
};

const StyledClock = styled(Clock)`
  position: relative;
  border: 5px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  // background: url('https://images.unsplash.com/photo-1558631203-57b781f67aaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80') center no-repeat;
  background-size: cover;
`;

export default StyledClock;
