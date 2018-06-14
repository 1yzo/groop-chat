import React from 'react';
import SideBar from '../components/SideBar';
import Convo from '../components/Convo';
import Previews from './Previews';
import Header from './Header';
import { connect } from 'react-redux';
import database  from '../firebase/firebase';
import HamburgerMenu from './HamburgerMenu';
import Preview from './Preview';
import MessageField from './MessageField';

class CopyApp extends React.Component {
    state = {
        previews: [],
        selected: '',
        showMenu: false
    };

    setSelected = (selected) => {
        this.setState(() => ({ selected }));
    }

    componentDidMount() {
        // Remove user on disconnect
        database.ref(`users/${this.props.currentUserId}`).onDisconnect().remove();
    }

    toggleShow = () => {
        this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
    };

    render() {
        this.state.showMenu && console.log('clicked');
        return (
            <div className="container" >
                <div  onClick={this.toggleShow}>
                    <Header forMobile={true} />
                </div>
                <div className="copyApp">
                    <HamburgerMenu 
                        show={this.state.showMenu} 
                        items={this.props.users.map((user) => (
                            <Preview name={user.name}/>
                        ))} 
                    />
        
                        <SideBar setSelected={this.setSelected}/>
                    <Convo previews={this.state.previews} selected={this.state.selected}/>
                </div>
                <div className="messageField messageField--mobile">
                    <MessageField />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUserId: state.config.uid,
    users: state.users
});

export default connect(mapStateToProps)(CopyApp);