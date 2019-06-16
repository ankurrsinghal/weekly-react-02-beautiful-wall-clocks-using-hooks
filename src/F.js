import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from "./Hands";

const marks = Array(12).fill();

const Mark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${props => props.rotation || "0deg"});
  transform-origin: center 130px;
`;

const getRomanNumeral = index => {
  const numerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

  return numerals[index];
};

const Clock = ({ className, size }) => {
  const time = useClock('beijing');

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => {
        return (
          <Mark
            key={i}
            size={size}
            rotation={i * 30 + "deg"}
            style={{
              fontSize: i % 3 === 0 ? '20px' : '12px'
            }}
          >
            {getRomanNumeral(i)}
          </Mark>
        );
      })}
      <Hands time={time} borderWidth={10} />
    </Circle>
  );
};

const StyledClock = styled(Clock)`
  position: relative;
  border: 10px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default StyledClock;
