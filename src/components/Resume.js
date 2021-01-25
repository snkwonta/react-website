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
                        <hr style={{borderTop: '3px solid black', width:'50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <hr style={{borderTop: '3px solid black', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>598 Chaparral Drive SE</p>
                        <h5>Phone</h5>
                        <p></p>
                        <h5>Email</h5>
                        <p></p>
                        <h5>Website</h5>
                        <p></p>
                        <hr style={{borderTop: '3px solid black', width:'50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <p>SEPTEMBER 2015 – DECEMBER 2020
                        <br></br>
                        BSc COMPUTER SCIENCE, UNIVERSITY OF CALGARY 
                        <br></br>
                        Alexander Rutherford Scholarship recipient 2015, Jimmie Condon Athletic Scholarship recipient 2015-2020, Suncor Scholarship recipient 2016-2018, 2020.</p>
                        <hr style={{borderTop: '3px solid white', width:'50%'}}/>
                        <h2>Experience</h2>
                        <p>
                        JANUARY 2019 – DECEMBER 2019
                        <br></br>
                        Student • Solution Designer • Suncor Energy
                        <br></br>
                        Worked in the Solution Design & Build team on different projects such as pulling and cleaning data with function modules from SAP through python and created reports and visualizations with Power BI.
                        </p>
                        <br></br>
                        <p>
                        MAY 2016 – SEPTEMBER 2016
                        <br></br>
                        Associate • Website Developer • StarterDev Inc.
                        <br></br>
                        Worked in a team building websites for clients in which I assisted clients with technical issues and built my own simple website.
                        </p>
                        <hr style={{borderTop: '3px solid white', width:'50%'}}/>
                        <h2>Skills</h2>
                        <p>
                        Strong communication and collaboration skills <br></br>
                        Programming – Python, HTML, JavaScript, Java, CSS, C++ <br></br>
                        Proficient skills in SAP, Microsoft Office Suite, Power BI <br></br>
                        Public Speaking Time Management <br></br>
                        Detail Oriented <br></br>
                        <hr style={{borderTop: '3px solid white', width:'50%'}}/>

                        </p>


                    </Cell>
                </Grid>
                <ProgressBar progress={44} />
            </div>
        )
    }
}

export default Resume;