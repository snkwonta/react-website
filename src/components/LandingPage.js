import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    myFunction(){
        "use strict";

        // ——————————————————————————————————————————————————
        // TextScramble
        // ——————————————————————————————————————————————————
        class TextScramble {
          constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
          }
        
          setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise(resolve => this.resolve = resolve);
            this.queue = [];
        
            for (let i = 0; i < length; i++) {
              const from = oldText[i] || '';
              const to = newText[i] || '';
              const start = Math.floor(Math.random() * 40);
              const end = start + Math.floor(Math.random() * 40);
              this.queue.push({
                from,
                to,
                start,
                end
              });
            }
        
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
          }
        
          update() {
            let output = '';
            let complete = 0;
        
            for (let i = 0, n = this.queue.length; i < n; i++) {
              let {
                from,
                to,
                start,
                end,
                char
              } = this.queue[i];
        
              if (this.frame >= end) {
                complete++;
                output += to;
              } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                  char = this.randomChar();
                  this.queue[i].char = char;
                }
        
                output += `<span class="dud">${char}</span>`;
              } else {
                output += from;
              }
            }
        
            this.el.innerHTML = output;
        
            if (complete === this.queue.length) {
              this.resolve();
            } else {
              this.frameRequest = requestAnimationFrame(this.update);
              this.frame++;
            }
          }
        
          randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
          }
        
        }
        
        const phrases = ['HTML/CSS | Java | Python | JavaScript']

        const el = document.querySelector('.text');
        const fx = new TextScramble(el);
        // const fx = fa.TextScramble(el);
        let counter = 0;

        const next = () =>{
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 800);

            });
            counter = (counter +1) % phrases.length;
        };

        next();
        

    }


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

                    <div class="container">
                        <div class="text"></div>
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