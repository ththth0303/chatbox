import React from 'react';
import Top from './top_menu';
import $ from 'jquery';
import Messages from './messages';
import Create from './create';
import _map from 'lodash/map';
import io from 'socket.io-client';

import './box.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {id: 1, userId: 0, userName: 'th', message: 'Hello'}
            ],
            user: 1,
            socket: null,
            typing: false
        }
    }

    componentWillMount() {
        const socket = io('https://limitless-badlands-87304.herokuapp.com/');
        this.setState({socket})
        socket.on('id', res => this.setState({user: res}))
        socket.on('newMessage', (response) => {this.newMessage(response)});
        // socket.on('startTyping', (response) => {this.typing(response.typing)});
        // socket.on('stopTyping', (response) => {this.typing(response.typing)});
        // $(document).on('input','.message_input', function() {
        //     socket.emit('startTyping');
        // });

    }

    newMessage(m) {
        const messages = this.state.messages;
        let ids = _map(messages, 'id');
        let max = Math.max(...ids);
        messages.push({
            id: max+1,
            userId: m.id,
            userName: 'thắng',
            message: m.data
        });

        let objMessage = $('.messages');
        if (objMessage[0].scrollHeight - objMessage[0].scrollTop == objMessage[0].clientHeight ) {
            this.setState({messages});
            objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);

        } else {
            this.setState({messages});
            if (m.id == this.state.user) {
                objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);
            }
        }
    }

    sendnewMessage(m) {
        if (m.value) {
            this.state.socket.emit("newMessage", m.value);
            m.value = "";
        }
    }

    componentDidUpdate() {
        if (this.state.typing) {
            if (true) {}
        }
    }

    typing(data) {
        if (data) {
            let objMessage = $('.messages');
            if (objMessage[0].scrollHeight - objMessage[0].scrollTop == objMessage[0].clientHeight) {
                this.setState({typing: data});
                objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);
            } else {
                this.setState({typing: data});
            }
        } else {
            this.setState({typing: false})
        }

    }
    render () {
        return (
            <div className="chat_window">
                <Top/>
                <Messages user={this.state.user} messages={this.state.messages} typing={this.state.typing}/>
                <Create sendMessage={this.sendnewMessage.bind(this)}/>
            </div>
        )
    }
}
