import React from 'react';
import ConvoInfo from './ConvoInfo';
import MessageField from './MessageField';
import MessagesDisplay from './MessagesDisplay';

class Convo extends React.Component {
    render() {
        return (
            <div className="convo">
                <ConvoInfo selected={this.props.selected} />
                <MessagesDisplay />
                <MessageField />
            </div>
        );
    }
}

export default Convo;