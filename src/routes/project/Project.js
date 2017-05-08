/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Project.css';



class Project extends React.Component {

  render() {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <section>
                    <div><h1>Front End Projects</h1></div>
                    <article className={s.breaking}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />>
                        <h1>Washington D.C. Attacked By Flying Saucers</h1>
                        <h2>Dateline Washington D.C.</h2>
                        <h3>Frank Bragg reporting</h3>
                        <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                    </article> 
                    <article className={s.breaking}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />>
                        <h1>Washington D.C. Attacked By Flying Saucers</h1>
                        <h2>Dateline Washington D.C.</h2>
                        <h3>Frank Bragg reporting</h3>
                        <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                    </article>
                    <article className={s.breaking}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />>
                        <h1>Washington D.C. Attacked By Flying Saucers</h1>
                        <h2>Dateline Washington D.C.</h2>
                        <h3>Frank Bragg reporting</h3>
                        <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                    </article>     
                </section>    
                <section>
                    <div><h1>Back End Projects</h1></div>
                    <article className={s.breaking}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />>
                        <h1>Washington D.C. Attacked By Flying Saucers</h1>
                        <h2>Dateline Washington D.C.</h2>
                        <h3>Frank Bragg reporting</h3>
                        <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                    </article> 
                    <article className={s.breaking}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />>
                        <h1>Washington D.C. Attacked By Flying Saucers</h1>
                        <h2>Dateline Washington D.C.</h2>
                        <h3>Frank Bragg reporting</h3>
                        <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                    </article>
                    <article className={s.breaking}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />>
                        <h1>Washington D.C. Attacked By Flying Saucers</h1>
                        <h2>Dateline Washington D.C.</h2>
                        <h3>Frank Bragg reporting</h3>
                        <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                    </article>     
                </section>            
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Project);