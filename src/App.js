import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter 
        changeBy={2}
        initialValue={10}
      />
      <Counter 
        initialValue={99}
        changeBy={33}      
      />
      <Counter 
        changeBy={8}
        initialValue={-5}
      />
      <Greet 
        whom="Cthulu"
        how="S'up"
      />
      <Greet 
        whom="Doctor Who"
        how="Allo"
      />
      <Greet 
        whom="You"
        how="Hey"
        color="blue"
      />

    </div>
  );
}

export default App;



