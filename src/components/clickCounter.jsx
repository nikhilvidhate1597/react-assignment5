import React from 'react'
import counterHOC from './counterHOC';

const ClickCounter = (props) => {

const { counter , handleIncrement } = props;

  return (

    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleIncrement}>Click Counter</button>
    </>
    
  )
}

const EnhancedClickCounter = counterHOC(ClickCounter,1);


export default EnhancedClickCounter;