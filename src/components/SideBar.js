import React from 'react';
import UserInfo from './UserInfo';
import SearchBar from './SearchBar';
import Previews from './Previews';

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <UserInfo newConvo={props.newConvo}/>
            <SearchBar />
            <Previews setSelected={props.setSelected}/>
        </div>
    );
}

export default SideBar;