import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import sidebarStyle from 'src/assets/jss/material-dashboard-react/components/sidebarStyle';

import {
  List,
  ListItem,
  ListItemText,
  NavLink,
} from './styles';

const Links = ({ ...props }) => {
  const {
    classes,
    routes,
  } = props;

  return (
    <List>
      {
        routes.map(prop => (
          <NavLink
            to={prop.layout + prop.path}
            activeClassName="active"
          >
            <ListItem button>
              <prop.icon
                className={classes.itemIcon}
              />

              <ListItemText
                primary={prop.name}
                disableTypography
              />
            </ListItem>
          </NavLink>
        ))
      }
    </List>
  );
};

Links.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withStyles(sidebarStyle)(Links);
