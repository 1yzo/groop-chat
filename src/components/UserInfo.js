import React from 'react';

class UserInfo extends React.Component {
    state = {
        count: 0,
        isCreating: false,
        value: "",
        error: ""
    };

    onClick = () => {
        this.setState(() => ({isCreating: true}));
    }

    onSubmit =(e) => {
        e.preventDefault();
        if (this.state.value.trim()) {
            this.props.newConvo(this.state.value);
            this.setState(() => ({value: "", isCreating: false, error: ""}));
            
        } else {
            this.setState(() => ({error: 'Cannot submit empty'}));            
        }        
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ value }))
    }

    render() {
        if (this.state.isCreating) {
            return (
                <div className="userInfo userInfo--creating">
                    <form onSubmit={this.onSubmit}>
                        <input
                            className="searchBar__input"
                            type="text" 
                            placeholder={!this.state.error ? "Contact Name" : this.state.error} 
                            autoFocus 
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                    </form>
                </div>
            );
        }
        return (
            <div className="userInfo">
                <i className="material-icons" style={{flex: 1}}>face</i>
                <button
                    style={{border: "none", background: "none"}}
                    onClick={this.onClick}
                >
                    <i className="material-icons">chat_bubble_outline</i>
                </button>
                <i className="material-icons">drag_indicator</i>
            </div>
        );
    }
}

export default UserInfo;