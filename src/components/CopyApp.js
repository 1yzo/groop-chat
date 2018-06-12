import React from 'react';
import SideBar from '../components/SideBar';
import Convo from '../components/Convo';
import Previews from './Previews';
import Header from './Header';
import ExitModal from './ExitModal';

export default class CopyApp extends React.Component {
    state = {
        previews: [],
        selected: ''
    };

    setSelected = (selected) => {
        this.setState(() => ({ selected }));
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="copyApp">
                    <SideBar setSelected={this.setSelected}/>
                    <Convo previews={this.state.previews} selected={this.state.selected}/>
                </div>
            </div>
        );
    }
}