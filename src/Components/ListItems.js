import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import SendIcon from '@material-ui/icons/Send'
import PersonIcon from '@material-ui/icons/Person'
import {NavLink} from 'react-router-dom'

export const mainListItems = (
  <div>
  <NavLink to="/Profile">
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="My Details" />
    </ListItem>
    </NavLink>
    <NavLink to="/Profile/Genres">
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Select Genre" />
    </ListItem>
    </NavLink>
    <NavLink to="/Profile/Leaderboards">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Leaderboard" />
    </ListItem>
    </NavLink>
  </div>
);

