import React from 'react'
import counterHOC from './counterHOC';


const RightClickCounter = (props) => {

  const { counter , handleIncrement } = props;

  return (

    <>
      <h1>Click Counter: {counter}</h1>
      <button onContextMenu={handleIncrement}>Click Counter</button>
    </>
    
  )
}

const EnhancedRightClickCounter = counterHOC(RightClickCounter,5);


export default EnhancedRightClickCounter;