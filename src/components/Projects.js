import React, { Component } from 'react';
import {Tab, Tabs} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0}
    }
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={tabID => this.setState({activeTab:tabID})} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>HTML</Tab>

                </Tabs>
            </div>
        )
    }
}

export default Projects;