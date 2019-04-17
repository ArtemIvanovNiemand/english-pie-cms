import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Hidden from '@material-ui/core/Hidden';

import sidebarStyle from 'src/assets/jss/material-dashboard-react/components/sidebarStyle';

import Links from './Links';
import MobileSidebar from './MobileSidebar';
import DesktopSidebar from './DesktopSidebar';

const Sidebar = ({ ...props }) => {
  const {
    classes,
    image,
    routes,
    handleDrawerToggle,
    open,
  } = props;

  const links = (
    <Links
      classes={classes}
      routes={routes}
    />
  );

  return (
    <Fragment>
      <Hidden mdUp implementation="css">
        <MobileSidebar
          classes={classes}
          handleDrawerToggle={handleDrawerToggle}
          links={links}
          image={image}
          open={open}
        />
      </Hidden>

      <Hidden smDown implementation="css">
        <DesktopSidebar
          classes={classes}
          links={links}
          image={image}
        />
      </Hidden>
    </Fragment>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  image: PropTypes.string.isRequired,
  routes: PropTypes.shape({}).isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(sidebarStyle)(Sidebar);
