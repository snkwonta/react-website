import React, { Component } from 'react';
import {Cell, Grid, Tab, Tabs, Card, CardActions, Button, CardMenu, IconButton, CardTitle, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '250', margin:'auto'}}>
                    <CardTitle style={{color: '#ffff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}></CardTitle>
                    <CardText>This Portfolio Website</CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/snkwonta/react-website" target='_blank'>GitHub</Button>
                    </CardActions>

                </Card>
            )
        }else if(this.state.activeTab === 1){
            return(
                <Card shadow={5} style={{minWidth: '250', margin:'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}></CardTitle>
                <CardText>School Project</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/snkwonta/PalindromeArray" target='_blank'>GitHub</Button>
                </CardActions>

            </Card>
            )

        }else if(this.state.activeTab === 2){
            return(
                <Card shadow={5} style={{minWidth: '250', margin:'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover' }}></CardTitle>
                <CardText>Reversi Game</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/snkwonta/Reversi" target='_blank'>GitHub</Button>
                </CardActions>

            </Card>
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