import React from 'react';
import Message from '../extends/message_item';

import './messages.scss';

export default class App extends React.Component {
    render () {
        return (
            <div className="chat_window">
                <Top/>
                <ul className="messages">
                    <Message/>
                </ul>
            </div>
        )
    }
}