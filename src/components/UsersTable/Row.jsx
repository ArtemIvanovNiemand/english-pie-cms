import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';

export default class Row extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      accountType: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { user = {} } = this.props;

    const {
      id,
      name,
      email,
      accountType,
    } = user;

    return (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{accountType}</TableCell>

        <TableCell>
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}
