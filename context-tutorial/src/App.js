import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider } from './contexts/sample';
import { AnotherProvider } from './contexts/another';

const App = () =>{
  return(
    <SampleProvider>
      <AnotherProvider>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
      </AnotherProvider>
    </SampleProvider>
  );
}

export default App;
