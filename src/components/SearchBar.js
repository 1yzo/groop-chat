import React from 'react';
import { connect } from 'react-redux';
import { setSearchQuery } from '../actions/config';

class SearchBar extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState(() => ({value: ''}));
        this.props.setSearchQuery('');
    }

    handleChange = (e) => {
        const value = e.target.value;
        if (value === '') {
            this.handleSubmit(e);
        }
        this.setState(() => ({value}));
        this.props.setSearchQuery(value);
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.handleSubmit(e);
        }
    }

    render() {
        return (
            <div className="searchBar" onSubmit={this.handleSubmit} onKeyDown={this.handleKeyDown} >
                <form style={{display: "flex", flex: 1}}>
                    <input
                        className="searchBar__input"
                        placeholder="Search"
                        type="text" 
                        value={this.props.searchQuery}
                        onChange={this.handleChange}
                        onBlur={() => this.props.setSearchQuery('')}
                    />
                </form>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    searchQuery: state.config.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    setSearchQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);