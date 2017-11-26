// REACT
import React from 'react';
import PropTypes from 'prop-types'

//------------------------------------
class MainApp extends React.Component
//------------------------------------
{
    constructor(props)
    {
        super(props);
        this.state = { text: this.props.defaultText };
    }

    render()
    {
        return ( <div>
                    <h1>Enter Text here</h1>
                    <textarea value={this.state.text}/>
                 </div>
               )
    }
}

//--------------------
MainApp.propTypes = {
//--------------------
    defaultText: PropTypes.string.isRequired
};
                
export default MainApp;