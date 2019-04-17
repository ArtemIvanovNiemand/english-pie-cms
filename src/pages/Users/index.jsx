import React from 'react';
import GridItem from 'src/components/Grid/GridItem';
import GridContainer from 'src/components/Grid/GridContainer';

import Card from 'src/components/Card/Card';
import CardBody from 'src/components/Card/CardBody';

import UsersTable from 'src/components/UsersTable';

const Users = () => (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardBody>
          <UsersTable />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
);

export default Users;
