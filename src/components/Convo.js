import React from 'react';
import MessageField from './MessageField';
import MessagesDisplay from './MessagesDisplay';

class Convo extends React.Component {
    render() {
        return (
            <div className="convo">
                <MessagesDisplay />
                <div className="messageField messageField--desktop">
                    <MessageField />
                </div>
            </div>
        );
    }
}

export default Convo;