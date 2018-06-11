import React from 'react';
import MessageField from './MessageField';
import MessagesDisplay from './MessagesDisplay';

class Convo extends React.Component {
    render() {
        return (
            <div className="convo">
                <MessagesDisplay />
                <MessageField />
            </div>
        );
    }
}

export default Convo;