import React, { useState } from 'react';
import styled from 'styled-components';

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
      </Background>
  <button style={{marginLeft: '600px'}} onClick={()=> setState(!state)}>{state ? 'ON' : 'OFF'}</button>
      </header>
    </div>
  );
}

export default App;
