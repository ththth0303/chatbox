import React from 'react';

import './app.scss';

export default class App extends React.Component {
    render () {
        return (
                <div classNameName="app__content">
                    <div classNameName="app__header"></div>
                    <div classNameName="app__body">
                        <h1>chat box</h1>
                        <div className="chat_window"><div className="top_menu"><div className="buttons"><div className="button close"></div><div className="button minimize"></div><div className="button maximize"></div></div><div className="title">Chat</div></div><ul className="messages"><li className="message left appeared"><img className="avatar" src="http://hinhanhdepvip.com/wp-content/uploads/2016/07/girl-xinh-de-thuong-2.jpg"/><div className="text_wrapper"><div className="text">Hello Philip! :)</div></div></li><li className="message right appeared"><div className="avatar"></div><div className="text_wrapper"><div className="text">Hi Sandy! How are you?</div></div></li><li className="message left appeared"><div className="avatar"></div><div className="text_wrapper"><div className="text">I'm fine, thank you!</div></div></li></ul><div className="bottom_wrapper clearfix"><div className="message_input_wrapper"><input className="message_input" placeholder="Type your message here..." /></div><div className="send_message"><div className="icon"></div><div className="text">Send</div></div></div></div>
                    </div>
                </div>
        )
    }
}
