import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { RotatingBranch, BranchPosition} from './components/RotatingBranch';

const Background = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  justify-content: flex-end;
  align-items: center;
`
const Pivot = styled.div`
  position: relative
`
const LAYERS = 4
const App: React.FC = () => {
  const [state, setState] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
      <Background>
        <Pivot>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={0} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={45} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={90} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={135} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={180} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={225} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={270} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
          <RotatingBranch shouldRenderInnerlines={state} initialAngle={315} layer={LAYERS} isFirst length={600} width={2} position={BranchPosition.CENTER}/>
        </Pivot>
      </Background>
  <button style={{marginLeft: '600px'}} onClick={()=> setState(!state)}>{state ? 'ON' : 'OFF'}</button>
      </header>
    </div>
  );
}

export default App;
