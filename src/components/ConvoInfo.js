import React from 'react';

export default class ConvoInfo extends React.Component {
    render() {
        const name = this.props.selected;
        const initials = name.split(' ').map((subname) => subname[0]);

        return (
            <div className="convoInfo">
                {!!this.props.selected && <h4 className="convoInfo__icon">{initials}</h4>}
            </div>
        );
    }
}