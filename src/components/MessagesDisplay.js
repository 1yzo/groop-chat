import React from 'react';
import { connect } from 'react-redux';

class MessagesDisplay extends React.Component {
    render() {
        const { messages } = this.props;

        return (
            <div className="messages-display">
                {messages.map(([ id, content ]) => {
                    return <div key={id}>{content}</div>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(MessagesDisplay);
