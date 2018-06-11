import React from 'react';
import { connect } from 'react-redux';
import { setName, startLogin } from '../actions/config';

class NameSelectPage extends React.Component {
    state = {
        value: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(setName(this.state.value));
        this.props.dispatch(startLogin()).then(() => {
            this.props.history.push('/dashboard');
        });
    }
    
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ value }));
    }

    render() {
        return (
            <div className="nameSelectPage">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.value}
                        placeholder="Display Name"
                    />
                </form>
            </div>
        );
    }
}

export default connect()(NameSelectPage);