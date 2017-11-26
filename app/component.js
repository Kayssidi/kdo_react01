// REACT
import React from 'react';

class MainApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: "..." };
    }

    render() {
        return ( <div>
                    <h1>Enter Text here</h1>
                    <textarea value={this.state.text}/>
                 </div> )
             }
}

export default MainApp;