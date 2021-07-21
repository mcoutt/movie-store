import React from 'react';
import ComponentExample from './Examples/ComponentExample';
import PureComponentExample from './Examples/PureComponentExample';
import FunctionalComponentExample from './Examples/functionalComponentExample';
import CreateElementExample from './Examples/CreateElementExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World !!
        </p>
        <ComponentExample />
        <PureComponentExample />
        <FunctionalComponentExample />
        <CreateElementExample />
      </header>
    </div>
  );
}

export default App;
