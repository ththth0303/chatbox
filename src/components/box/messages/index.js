import React from 'react';
import Message from '../message';
import Typing from '../typing';

import './messages.scss';

export default class App extends React.Component {
    render () {
        return (
            <ul className="messages">
                {this.props.messages.map(item =>
                    <Message key={item.id} user={item.userId == this.props.user? true: false} message={item.message}/>
                )}
                {this.props.typing ? <Typing/> : ''}
            </ul>
        )
    }
}
