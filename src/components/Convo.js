import React from 'react';
import ConvoInfo from './ConvoInfo';
import MessageField from './MessageField';

class Convo extends React.Component {
    render() {
        return (
            <div className="convo">
                <ConvoInfo selected={this.props.selected} />
                <div style={{flex: 1, flexShrink: 1, height: "100%"}} />
                <MessageField />
            </div>
        );
    }
}

export default Convo;