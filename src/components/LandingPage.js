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

                    {/* <div class="loading">
                        <span>Loading</span>
                    </div> */}


                </Grid>

                <div className="scrambler">
                    <h4>
                        <span>HTML/CSS | Python | JavaScript</span>
                        <span>+T\L/[S5 | 9yt#0n | J\v/S[ri6t</span>
                        <span>H=M|/CS2 | P4+ho^ | 7a^a5c?1p+</span>
                        <span>H%;-/CS* | 8yt@o! | J'v$,c|i:t</span>
                        <span>'T!L/~S@ | P#t%o( | J_va$c^ip-</span>
                    </h4>
                </div>


                
            </div>
            
        )
    }
}

export default LandingPage;