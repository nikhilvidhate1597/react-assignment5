import './App.css';
import ClickCounter from './components/clickCounter';
import RightClickCounter from './components/rightClickCounter';

import Higherordercomponent from './components/higherordercomponent';
import Purecomponent from './components/purecomponent';
import ComponentPure from './components/pureComponents';

function App() {
  return (
    <div className="App">
      <div className='box1'><Higherordercomponent/>
      <ClickCounter/>
      <RightClickCounter/></div>
      <div className='box2'><Purecomponent/>
      <ComponentPure/></div>
      
    </div>
  );
}

export default App;
