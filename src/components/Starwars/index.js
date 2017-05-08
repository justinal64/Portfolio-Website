/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Starwars.css';
import Link from '../Link';
import ReactPlayer from 'react-player';
import audio from './audio/Star_Wars_Theme.mp3';



class Starwars extends React.Component {
    
  render() {
    return (
        <div className={s.root}>
            {/*ALL CREDIT FOR THE SCROLLING TEXT GOES TO 
            Craig Buckler
            http://www.sitepoint.com/css3-starwars-scrolling-text/ 

            Blame me for the music via embedded video bit*/}

            {/*This is for the audio clip*/}
            <div className={s.overFlow}>
                <div className={s.marginTop}>
                    <object width="420" height="315">
                        <param name="movie" value="http://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"></param>
                        {/*<param name="allowFullScreen" value="true"></param>*/}
                        {/*<param name="allowscriptaccess" value="always"></param>*/}
                        <embed src="http://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2" type="application/x-shockwave-flash" width="420" height="315"></embed>
                    </object>
                </div>
            </div>
            {/*<div>Play Audio</div>*/}

            <p id={s.start}>A short time ago in a browser very, very close&hellip;</p>

            <h1>JL Designs Presents</h1>

            <div id={s.titles}>
                <div id={s.titlecontent}>

                <p>
                    Hi my name is Justin Leggett and I am a Junior Software Developer from Nashville TN.
                </p>

                <p>
                    Over the past year I have been on a journey to transform from a Jedi in training into Obi Wan. 
                </p>

                <p>
                    I have been attending Nashville Software school
                    Where I learned CSS, HTML, Javascript, JQuery, Angular, React, C# and SQL. If you would like to see some of my work please
                    go to the projects page. 
                </p>

                <p>
                    When I'm not coding I like to spend to with my family, Golfing, volunteering at church, or just watching Star Wars.    
                </p>

                <p>
                    Thank you for visiting my portfolio website and live long and prosper.   
                </p>

                {/*<p className="center"><a href="http://www.sitepoint.com/css3-starwars-scrolling-text/">sitepoint.com/<br />css3-starwars-scrolling-text/</a></p>*/}

                {/*<p>and give me a shout on Twitter <a href="http://twitter.com/craigbuckler">@craigbuckler</a> &ndash; I'd love to see how you use and abuse it!</p>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Starwars);