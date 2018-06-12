import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Message from './Message';

class MessagesDisplay extends React.Component {
    scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight + 1;
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
                <div style={{color: 'transparent', fontSize: '6px'}}>hack</div>                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(MessagesDisplay);
