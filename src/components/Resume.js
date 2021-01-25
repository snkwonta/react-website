import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import {ProgressBar} from 'react-mdl';
import logo from './IMG_0022.PNG';

class Resume extends Component {
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        
                        <div style={{textAlign:"center"}}>
                            <img src={logo}
                            style={{height:'200px'}}
                            alt='Avatar'></img>
                        </div>

                        <h2 style={{padding:'top'}}>Sodienye Nkwonta</h2>
                        <h4 style={{color:'grey'}}> Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>598 Chaparral Drive SE</p>
                        <h5>Phone</h5>
                        <p></p>
                        <h5>Email</h5>
                        <p></p>
                        <h5>Website</h5>
                        <p></p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>
                <ProgressBar progress={44} />
            </div>
        )
    }
}

export default Resume;