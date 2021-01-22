import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        <div class="container">
            <div class="text"></div>
        </div> 
        return (
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-3-2/128/person_avatar_student_young_people_man_skinhead-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                    </Cell>
                    <div className="typewriter">
                        <h1>Aspiring Web Developer</h1>
                    </div>

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