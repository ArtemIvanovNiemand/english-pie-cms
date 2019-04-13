import React from 'react';
import TableBody from '@material-ui/core/TableBody';

import Table from './Table';
import Head from './Head';
import Row from './Row';
import { mockedUsers } from './mockedUsers';

const UsersTable = () => (
  <Table>
    <Head />

    <TableBody>
      {
        mockedUsers.map(user => (
          <Row key={user.id} user={user} />
        ))
      }
    </TableBody>
  </Table>
);

export default UsersTable;
