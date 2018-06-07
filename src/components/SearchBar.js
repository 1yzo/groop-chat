import React from 'react';

class SearchBar extends React.Component {

    state = {
      value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState(() => ({value: ''}));
        this.props.setSearchQuery({});
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
                        value={this.state.value}
                        onChange={this.handleChange}
                        onBlur={() => this.setState(() => ({value: ''}))}
                    />
                </form>
            </div>
        );
    }
};

export default SearchBar;