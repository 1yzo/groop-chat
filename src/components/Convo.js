import React from 'react';
import ConvoInfo from './ConvoInfo';
import MessageField from './MessageField';
import { storage } from '../firebase/firebase';

class Convo extends React.Component {
    render() {
        return (
            <div className="convo">
                <ConvoInfo selected={this.props.selected} />
                <div style={{flex: 1, flexShrink: 1, height: "100%"}}></div>
                <MessageField />
            </div>
        );
    }
}

export default Convo;