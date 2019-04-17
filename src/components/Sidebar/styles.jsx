import styled from 'styled-components';
import MaterialList from '@material-ui/core/List';
import MaterialListItemText from '@material-ui/core/ListItemText';
import MaterialListItem from '@material-ui/core/ListItem';

import { NavLink as RouterNavLink } from 'react-router-dom';

export const List = styled(MaterialList)`
  margin-top: 20px;
  margin-bottom: 0;
  
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  
  list-style: none;
  position: unset;
`;

export const ListItem = styled(MaterialListItem)`
   width: auto;
   transition: all 300ms linear;
   margin: 10px 15px 0;
   border-radius: 3px;
   position: relative;
   display: block;
   padding: 10px 15px;
   
   .active & {
     background-color: #00acc1;
   }

`;

export const ListItemText = styled(MaterialListItemText)`
  margin: 0;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
`;

export const NavLink = styled(RouterNavLink)`
  position: relative;
  display: block;
  text-decoration: none;
  
  
  &:hover,
  &:focus,
  &:visited{
    color: #fff
  }
  
  &:hover {
    ${ListItem} {
      background-color: #00acc1;
    }
  }
`;

export default {
  List,
  ListItem,
  ListItemText,
  NavLink,
};
