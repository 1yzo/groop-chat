import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { addMessage } from '../actions/messages';

export default class MessageField extends React.Component {
    state = {
        value: ''
    };

    handleKeyDown = (e) => {
        const message = e.target.value;
        if (e.keyCode === 13) {
            e.preventDefault(); 
            addMessage(message);
            this.setState(() => ({value: ''}));
        }
    };
    
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ value }));
    };

    render() {
        return (
            <div className="messageField">
                <form onKeyDown={this.handleKeyDown} ref={(el) => this.myFormRef = el} >
                    <TextareaAutosize
                        className="messageField__input"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Message"
                        maxRows={8}
                    />
                </form>
            </div>
        );
    }
}
