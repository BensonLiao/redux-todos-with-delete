import React, {useState} from 'react'
import {
  makeStyles,
  TextField,
  Button,
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'
import {useAuth} from './App'

const useStyles = makeStyles({
  list: () => ({
    borderRadius: 4,
    border: '1px solid black',
  }),
});

const Profile = () => {
  const classes = useStyles();
  const auth = useAuth();
  const [timezone, setTimezone] = useState(auth.user.timezone);
  const handleTimezoneChange = event => {
    setTimezone(event.target.value);
  };

  const updateTimezone = () => {
    const {user: {objectId, sessionToken}} = auth;
    auth.updateUser(objectId, sessionToken, timezone);
  };

  return (
    <List>
      <ListItem
        className={classes.list}
      >
        <ListItemText
          primary="Username: "
        />
        <ListItemText
          primary={auth.user.username}
        />
      </ListItem>
      <ListItem
        className={classes.list}
      >
        <ListItemText
          primary="Code: "
        />
        <ListItemText
          primary={auth.user.code}
        />
      </ListItem>
      <ListItem
        className={classes.list}
      >
        <ListItemText
          primary="Timezone: "
        />
        <ListItemText
          primary={
            <TextField 
              id="user-timezone" 
              label="Name" 
              type="number" 
              value={timezone} 
              onChange={handleTimezoneChange}
            />
          }
        />
        <ListItemSecondaryAction 
          onClick={updateTimezone}
        >
          <Button variant="outlined" color="primary">
            Change
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default Profile
