import React from 'react';

class HamburgerMenu extends React.Component {
    state = {
        style: {}
    }

    // toggleVisibility = () => {
    //     if (this.props.show) {
    //         return 'hamburger-menu hamburger-menu--show';
    //     } else {
    //         return 'hamburger-menu';
    //     }
    // };
    
    componentWillMount() {
        const flexDirection = this.props.position === 'top' ? ( 
            'row' 
        ) : (
            'column'
        );

        this.setState(() => ({ style: {
            display: 'flex',
            flexDirection,
            background: this.props.color || '#eee'
        }}));
    }

    render() {
        return (
            <div className={this.props.show ? 'hamburger-menu hamburger-menu--show' : 'hamburger-menu'} style={this.state.style}>
                {this.props.items.map((item, ix) => {
                    return(<div key={ix}>{item}</div>);
                })}
            </div>
        );
    }
}

HamburgerMenu.defaultProps = {
    position: 'left',
    items: [],
};

export default HamburgerMenu;