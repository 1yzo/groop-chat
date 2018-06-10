import React from 'react';
import '../styles/components/_previews.scss';
import Preview from './Preview';
import { connect } from 'react-redux';

const checkIfAnyFound = (arr) => {
    if (arr.length > 0) {
        return arr;
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1}}>
                <p style={{ alignSelf: 'center', color: '#767676'}}>Not Found</p>   
            </div>         
        );
    }
};
 
class Previews extends React.Component {
    render() {
        const previews = this.props.previews.map((preview) => <Preview 
                                                                key={preview.uid}
                                                                name={preview.name}
                                                                setSelected={this.props.setSelected}
                                                                setSearchQuery={this.props.setSearchQuery}
                                                                />);
        return (
            <div className="previews">
                {
                    typeof this.props.searchQuery === 'string' ? 
                        checkIfAnyFound(previews.filter((preview) => preview.props.name.toLowerCase().includes(this.props.searchQuery.toLowerCase())))
                    :
                        previews
                }
        
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    previews: state.users
});

export default connect(mapStateToProps)(Previews);