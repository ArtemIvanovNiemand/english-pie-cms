// @material-ui/icons
import BubbleChart from '@material-ui/icons/BubbleChart';
import Notifications from '@material-ui/icons/Notifications';
import Person from '@material-ui/icons/Person';
import TableList from 'src/pages/TableList/TableList';
import Icons from 'src/pages/Icons';
import NotificationsPage from 'src/pages/Notifications/Notifications';

const dashboardRoutes = [
  {
    path: '/users',
    name: 'Users',
    icon: Person,
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: BubbleChart,
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
];

export default dashboardRoutes;
