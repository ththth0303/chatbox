import React from 'react';

import './top_menu.scss';

export default class App extends React.Component {
    render () {
        return (
            <div className="top_menu">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                <div className="title">Chat</div>
            </div>
        )
    }
}
