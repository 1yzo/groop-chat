import React from 'react';

const Message = ({id, content}) => {
    return (
        <div className="message">
            <div>{id}</div>
            <div>{content}</div>
        </div>
    );
}

export default Message;