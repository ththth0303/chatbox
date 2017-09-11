import React from 'react';
import Top from './top_menu';

import './box.scss';

export default class App extends React.Component {
    render () {
        return (
            <div className="chat_window">
                <Top/>
            </div>
        )
    }
}
