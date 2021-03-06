import React from 'react';
import { connect } from 'react-redux';
import { setName, startLogin } from '../actions/config';
import Header from './Header';

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
            <div className="container">
                <Header />
                <div className="nameSelectPage">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            onChange={this.handleChange} 
                            value={this.state.value}
                            placeholder="Display Name"
                            autoFocus
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(NameSelectPage);