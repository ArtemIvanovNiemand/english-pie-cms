import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

export default class Head extends React.Component {
  render() {
    return (
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>name</TableCell>
          <TableCell>email</TableCell>
          <TableCell>Account type</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
    );
  }
}
