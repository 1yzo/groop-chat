import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export default class MessageField extends React.Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ value }));
    };

    render() {
        return (
            <div className="messageField">
                <form>
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
