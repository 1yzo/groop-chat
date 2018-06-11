import React from 'react';

const Message = ({ id, content }) => {
    console.log(content);
    const { author, message: messageText } = content;
    return (
        <div className="message">
            <div className="message__author">{author}</div>
            <div className="message__content">{messageText}</div>
        </div>
    );
}

export default Message;