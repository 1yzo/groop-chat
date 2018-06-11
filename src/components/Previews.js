import React from 'react';
import '../styles/components/_previews.scss';
import Preview from './Preview';
import { connect } from 'react-redux';
 
class Previews extends React.Component {
    render() {
        return (
            <div className="previews">
                {this.props.previews.map((preview) => <Preview 
                    key={preview.uid}
                    name={this.props.name}
                    setSelected={this.props.setSelected}
                    setSearchQuery={this.props.setSearchQuery}
                    />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        previews: state.users.filter((user) => {
            return user.name.toLowerCase().includes(state.config.searchQuery.toLowerCase());
        }),
        name: state.config.name
    })
};

export default connect(mapStateToProps)(Previews);