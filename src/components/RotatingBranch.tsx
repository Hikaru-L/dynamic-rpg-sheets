import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CSSTransition from 'react-transition-group/CSSTransition';

export interface RotatingBranchProps {
  initialAngle?: number
  layer: number
  length: number
  width: number
  isFirst?: boolean
  position: BranchPosition
  shouldRenderInnerlines?: boolean
}

const transitionEndHandler = () => {
  return
}

const ANIMATION_DURATION = 2000

const BranchBox = styled.div<RotatingBranchProps>`
width: ${({length}) => length}px;
position: absolute;
background-color: cyan;
transform: rotate(${({initialAngle}) => initialAngle ? initialAngle : 0}deg);
top: ${({position, length}) =>  position === BranchPosition.CENTER ? 0 : (position === BranchPosition.LEFT) ? length/12 : -(length/12)}px;
left: ${({length, isFirst}) => !isFirst ? -(length) : -(length* 2)}px;
height: ${({width}) => width}px;
display: flex;
justify-content: flex-end;
`;

const Branch = styled.div<RotatingBranchProps>`
background-color: cyan;
top: 0;
position: relative;
left: 0;
width: ${({length}) => length/3}px;
height: ${({width}) => width}px;
border-radius: 4px;
&.fade-enter {
  width: 0px;
  background-color: purple;
}
&.fade-enter-active {
  width: ${({length}) => length/3}px;
  background-color: cyan;
  transition: width ${ANIMATION_DURATION}ms, background-color ${ANIMATION_DURATION}ms;
}
&.fade-exit {
  width: ${({length}) => length/3}px;
  background-color: cyan;
}
&.fade-exit-active {
  width: 0px;
  background-color: purple;
  transition: width ${ANIMATION_DURATION}ms, background-color ${ANIMATION_DURATION}ms;
}

`
const Pivot = styled.div`
  position: relative
`

export const RotatingBranch: React.FC<RotatingBranchProps> = (props) => {

  const ref = useRef(null)

  return (
    <BranchBox initialAngle={props.initialAngle} layer={props.layer} length={props.length} width={props.width} isFirst={props.isFirst} position={props.position}>
      <CSSTransition in={props.shouldRenderInnerlines} classNames="fade" addEndListener={transitionEndHandler} >
        <Branch initialAngle={props.initialAngle} ref={ref} layer={props.layer} length={props.length} width={props.width} position={props.position}>
            {props.layer ? (
              <Pivot>
              <RotatingBranch shouldRenderInnerlines={props.shouldRenderInnerlines} layer={props.layer-1} length={props.length/2} initialAngle={-30} width={props.width/2} position={BranchPosition.LEFT}/>
              <RotatingBranch shouldRenderInnerlines={props.shouldRenderInnerlines} layer={props.layer-1} length={props.length/2}  initialAngle={0} width={props.width/2} position={BranchPosition.CENTER}/>
              <RotatingBranch shouldRenderInnerlines={props.shouldRenderInnerlines} layer={props.layer-1} length={props.length/2}  initialAngle={30} width={props.width/2} position={BranchPosition.RIGHT}/>
              </Pivot>
            ) : <></>}
        </Branch>
      </CSSTransition>
    </BranchBox>
  );
};

export enum BranchPosition {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
