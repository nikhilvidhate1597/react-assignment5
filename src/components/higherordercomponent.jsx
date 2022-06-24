import React from 'react'

const Higherordercomponent = () => {
  return (
    <div>
        <h1>Higher Order Components</h1>
        <ul>
            <li>A higher-order component is an advanced technique in React for reusing component logic. </li>
            <li>A function that takes a component and returns a new component by adding additional functionalities to the component. HOC is wrapped in the original component.</li>
            <li> HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.</li>
            <li>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
            <li>The purpose of a HOC is to enhance a component (usually a dumb component) with extra functionality. </li>
        </ul>        
       </div>
  )
}



export default Higherordercomponent;