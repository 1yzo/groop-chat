import React from 'react';
import UserInfo from './UserInfo';
import SearchBar from './SearchBar';
import Previews from './Previews';

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <UserInfo newConvo={props.newConvo}/>
            <SearchBar setSearchQuery={props.setSearchQuery}/>
            <Previews setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} setSelected={props.setSelected}/>
        </div>
    );
}

export default SideBar;