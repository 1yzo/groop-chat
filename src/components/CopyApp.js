import React from 'react';
import SideBar from '../components/SideBar';
import Convo from '../components/Convo';
import Previews from './Previews';

export default class CopyApp extends React.Component {
    state = {
        previews: [],
        selected: '',
    };

    setSelected = (selected) => {
        this.setState(() => ({ selected }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('previews');
            const previews = JSON.parse(json);

            if (previews) {
                this.setState(() => ({ previews }));
            }
        } catch (e) {
        
        }
    }

    render() {
        return (
            <div className="copyApp">
                <SideBar setSelected={this.setSelected}/>
                <Convo previews={this.state.previews} selected={this.state.selected}/>
            </div>
        );
    }
}