import React from 'react';

import './message.scss';

export default class App extends React.Component {
    render () {
        return (
            <li className={this.props.user? "message right appeared": "message left appeared"}>
                <div className="avatar"></div>
                <div className="text_wrapper">
                    <div className="text">{this.props.message}</div>
                </div>
            </li>
        )
    }
}
