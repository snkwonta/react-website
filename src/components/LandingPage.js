import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
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

                </Grid>
            </div>   
        )
    }
}
export default LandingPage;