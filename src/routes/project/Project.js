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
// import TheBibleApp from '/assets/img/project/ChildrensBible';


class Project extends React.Component {

  render() {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.flexContainer}>
                    <h1 className={s.center}>Front End Projects</h1>
                    <section>
                        <article className={s.breaking}>
                            {/*<img src={TheBibleApp} alt="Photograph of a flying saucer over the US Capitol building" />*/}
                            <h1>TheBibleApp</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>I struggled to get my children to listen to the bible being read to them(4 children under the age of 3),
                               and this is the solution I came up with. I use simple animations(using ng-animate) to hold the childs 
                               attention while the verses are read to them. With the click of a button the user can also be rerouted
                               to an adult version of the app that uses the Digital Bible Platform API to pull back the King James 
                               version of the bible. This project combines my knowledge of CSS, HTML, Javascript, Angular 1, Materialize,
                               Digital Bible Platform API, and Firebase.</p>
                        </article> 
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                        </article>
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                        </article>     
                    </section>
                </div>    
                <div className={s.transparent}></div>
                <div>
                    <h1 className={s.center}>Back End Projects</h1>
                    <section>
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                        </article> 
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                        </article>
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>I struggled to get my children to listen to the bible being read to them(4 children under the age of 3),
                               and this is the solution I came up with. I use simple animations(using ng-animate) to hold the childs 
                               attention while the verses are read to them. With the click of a button the user can also be rerouted
                               to an adult version of the app that uses the Digital Bible Platform API to pull back the King James 
                               version of the bible. This project combines my knowledge of CSS, HTML, Javascript, Angular 1, Materialize,
                               Digital Bible Platform API, and Firebase.</p>
                        </article>     
                    </section>
                </div>  
                <div>
                    <h1 className={s.center}>Side Projects</h1>
                    <section>
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                        </article> 
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>The country was brought to a standstill today when flying saucers – presumably from Mars, although Venusians have also been suspected – appeared over the nation’s capital, intent on destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared elsewhere in the country.</p>
                        </article>
                        <article className={s.breaking}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg" alt="Photograph of a flying saucer over the US Capitol building" />
                            <h1>Washington D.C. Attacked By Flying Saucers</h1>
                            <h2>Dateline Washington D.C.</h2>
                            <h3>Frank Bragg reporting</h3>
                            <p>I struggled to get my children to listen to the bible being read to them(4 children under the age of 3),
                               and this is the solution I came up with. I use simple animations(using ng-animate) to hold the childs 
                               attention while the verses are read to them. With the click of a button the user can also be rerouted
                               to an adult version of the app that uses the Digital Bible Platform API to pull back the King James 
                               version of the bible. This project combines my knowledge of CSS, HTML, Javascript, Angular 1, Materialize,
                               Digital Bible Platform API, and Firebase.</p>
                        </article>     
                    </section>
                </div> 
                <div className={s.transparentFooter}></div>                             
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Project);