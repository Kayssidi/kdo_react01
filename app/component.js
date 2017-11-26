// REACT
import React from 'react';
import PropTypes from 'prop-types'

// MATERIAL-UI
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

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
                     <AppBar position="static" color="default">
                        <h1>Enter Text here</h1>
                     </AppBar>
                        <TextField value={this.state.text}/>
                        <Button raised color="primary">OK</Button>
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