import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return (
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://avatars.githubusercontent.com/u/25233310?s=460&u=85d271976b78912071e27631ad5a1d2ee9e7e296&v=4"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <div className="typewriter">
                                <h1>Aspiring Web Developer</h1>
                            </div>
                            <hr/>
                            <div className="typewriter1">
                                <h3>HTML | CSS | Python</h3>
                            </div>
                                    


                        </div>
                    </Cell>
                    <div class="socialLinks" class="center">
                        <a href="https://github.com/snkwonta" target="_blank" rel="noreferrer">
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sody-nkwonta-40aa7813a/" target="_blank" rel="noreferrer">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </div>


                </Grid>
            </div>   
        )
    }
}
export default LandingPage;