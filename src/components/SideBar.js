import React from 'react';
import SearchBar from './SearchBar';
import Previews from './Previews';

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <SearchBar />
            <Previews setSelected={props.setSelected}/>
        </div>
    );
}

export default SideBar;