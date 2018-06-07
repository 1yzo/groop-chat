import React from 'react';
import '../styles/components/_previews.scss';
import Preview from './Preview';

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

export default class Previews extends React.Component {
    render() {
        const previews = this.props.previews.map((preview) => <Preview 
                                                                key={preview}
                                                                name={preview}
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
