import React from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import { addMessage } from '../actions/messages';

class MessageField extends React.Component {
    state = {
        value: ''
    };

    handleKeyDown = (e) => {
        const message = e.target.value;
        if (e.keyCode === 13) {
            e.preventDefault(); 
            console.log(this.props.name);
            addMessage(message, this.props.name);
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

const mapStateToProps = (state) => ({
    name: state.config.name
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (message, author) => dispatch(addMessage(message, author))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);