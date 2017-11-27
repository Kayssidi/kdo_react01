// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT
import MainApp from './component'

//------------------
function startApp()
//------------------
{
    ReactDOM.render(
      <MainApp defaultText="..."/>,
      document.getElementById('root')
    );    
}

//------------------
// main()
//------------------

if (!window.cordova)
{
    console.log('Regular App started !');
	startApp();
}
else
{
    console.log('Cordova App started !');
	document.addEventListener('deviceready', startApp, false);
}
