import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Resume.css';



class Resume extends React.Component {

  render() {
    return (
        <div className={s.root}>
            <div className={s.container}>
                Here is my Resume                         
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Resume);