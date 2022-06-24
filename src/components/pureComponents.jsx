
import React, { PureComponent} from 'react';

class ComponentPure extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: "Nikhil",
        };
    }

    handleUpdate = () => {
        this.setState({ name: "Vidhate"})

        
    };

    render(){
        console.log("Component updated")
        return(
            <div>
                <h1>Name : {this.state.name}</h1>
                  
   
                <button onClick={this.handleUpdate}>Click</button>
                <h2>Check console for update log</h2>
            </div>
        )
    }

}

export default ComponentPure;