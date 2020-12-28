import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return (
            <div style={{width: 100, margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <img
                        src=""
                        alt="avatar"
                        className="avatar-img"
                    />
                </Grid>
                
            </div>
        )
    }
}

export default LandingPage;