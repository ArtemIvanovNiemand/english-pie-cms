import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Brand from './Brand';

const MobileSidebar = ({ ...props }) => {
  const {
    classes,
    image,
    links,
    open,
    handleDrawerToggle,
  } = props;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Brand />

      <div className={classes.sidebarWrapper}>
        {links}
      </div>

      {
        image
        && (
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${image})` }}
        />
        )
      }
    </Drawer>
  );
};

MobileSidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.shape({}).isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default MobileSidebar;
