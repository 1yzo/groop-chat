import React from 'react';

const Message = ({ id, content }) => {
    const { author, message: messageText } = content;
    return (
        <div className="message">
            <div>
                <div className="message__author">{author}</div>
            </div>
            <div className="message__content">{messageText}</div>
        </div>
    );
}

export default Message;
