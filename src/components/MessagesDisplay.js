import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Message from './message';

class MessagesDisplay extends React.Component {
    scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const { messages } = this.props;

        return (
            <div className="messages-display" ref={(el) => { this.messagesContainer = el}}>
                {messages.map(([ id, content ]) => {
                    return <Message key={id} id={id} content={content} />
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(MessagesDisplay);
