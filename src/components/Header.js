import React from 'react';

const Header = (props) => (
    <div className={props.forMobile ? 'header header--mobile' : 'header'}>
        <h1>GroopChat</h1>
    </div>
);

export default Header;