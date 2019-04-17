import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

import Brand from './Brand';

const DesktopSidebar = ({ ...props }) => {
  const {
    classes,
    image,
    links,
  } = props;

  return (
    <Drawer
      variant="permanent"
      open
    >
      <Brand />

      <div className={classes.sidebarWrapper}>{links}</div>

      {
        image && (
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${image})` }}
        />
        )
      }
    </Drawer>
  );
};

DesktopSidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.shape({}).isRequired,
};

export default DesktopSidebar;
