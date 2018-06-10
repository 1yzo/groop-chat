import React from 'react';

export default class Preview extends React.Component {

    handleClick = () => {
        this.props.setSelected(this.props.name);
    }

    render() {
        const {name}= this.props;
        const initials = name.split(' ').map((subname) => subname[0]);

        return (
            <button className="preview" onClick={this.handleClick}>
                <h1>{initials}</h1>
                <div className="preview__body">
                    <h3>{name}</h3>
                </div>
            </button>
        );
    }
}