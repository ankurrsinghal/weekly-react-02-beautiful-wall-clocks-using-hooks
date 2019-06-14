import React from "react";
import styled from "styled-components";
import { Circle } from "./ui";

const SecondHand = styled.div`
  position: absolute;
  width: 1px;
  height: ${ props => 150 - 10 - props.borderWidth }px;
  background: black;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  transform: rotate(${props => props.rotation || "30deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px bottom;
`;

const MinuteHand = styled.div`
  position: absolute;
  width: 3px;
  height: ${ props => 150 - 50 - props.borderWidth }px;
  background: black;
  border-radius: 100px;
  top: 50px;
  left: 50%;
  transform: rotate(${props => props.rotation || "30deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px bottom;
`;

const HourHand = styled.div`
  position: absolute;
  width: 5px;
  height: ${ props => 150 - 70 - props.borderWidth }px;
  background: black;
  border-radius: 100px;
  top: 70px;
  left: 50%;
  transform: rotate(${props => props.rotation || "30deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px bottom;
`;

const Dot = styled(Circle)`
  position: absolute;
  background: black;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export default ({ time, borderWidth = 10 }) => {
  return (
    <div>
      <SecondHand borderWidth={borderWidth} rotation={time.getSeconds() * 6 + "deg"} />
      <MinuteHand
        borderWidth={borderWidth}
        rotation={(time.getMinutes() + time.getSeconds() / 60) * 6 + "deg"}
      />
      <HourHand
        borderWidth={borderWidth}
        rotation={
          ((time.getHours() % 12) + time.getMinutes() / 60) * 30 + "deg"
        }
      />
      <Dot size={10} />
    </div>
  );
};
