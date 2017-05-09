import React from 'react';
import Layout from '../../components/Layout';
import Project from './Resume';

const title = 'Resume';

export default {

  path: '/resume',

  action() {
    return {
      title,
      component: <Layout><Project title={title} /></Layout>,
    };
  },

};
