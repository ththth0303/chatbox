import React from 'react';
import Box from './components/box';


import './app.scss';

export default class App extends React.Component {
    render () {
        return (
                <div className="app__content">
                    <h1>chat box</h1>
                    <Box/>  
                </div>
        )
    }
}
