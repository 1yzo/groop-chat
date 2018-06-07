import React from 'react';
import SideBar from '../components/SideBar';
import Convo from '../components/Convo';
import Previews from './Previews';

export default class CopyApp extends React.Component {
    state = {
        previews: [],
        selected: '',
        searchQuery: ''
    };

    setSelected = (selected) => {
        this.setState(() => ({ selected }));
    }

    setSearchQuery = (str) => {
        if (str) {
            this.setState(() => ({searchQuery: str}))
        }
    }

    newConvo = (name) => {
        this.setState((prevState) => ({previews: prevState.previews.concat(name)}))
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.previews.length !== this.state.previews.length) {
            const json = JSON.stringify(this.state.previews);
            localStorage.setItem('previews', json);
        }
    }

    render() {
        return (
            <div className="copyApp">
                <SideBar searchQuery={this.state.searchQuery} setSearchQuery={this.setSearchQuery} previews={this.state.previews} newConvo={this.newConvo} setSelected={this.setSelected}/>
                <Convo previews={this.state.previews} selected={this.state.selected}/>
            </div>
        );
    }
}