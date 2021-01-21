import React, { Component } from 'react';
import {Cell, Grid, Tab, Tabs, Card, CardActions, Button, CardMenu, IconButton, CardTitle} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '250', margin:'auto'}}>
                    <CardTitle style={{color: '#ffff'}}></CardTitle>

                </Card>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Java</h1></div>
            )

        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is HTML</h1></div>
            )

        }

    }

    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={tabID => this.setState({activeTab:tabID})} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>HTML</Tab>

                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>

                        </Cell>
                    </Grid>
                    

                </section>
            </div>
        )
    }
}

export default Projects;