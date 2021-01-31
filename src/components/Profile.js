import React, {useState} from 'react'
import {
  makeStyles,
  useTheme,
  TextField,
  Button,
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'
import {useAuth} from './App'

const useStyles = makeStyles({
  list: props => ({
    '& li': {
      borderRadius: 4,
      border: `1px solid ${props.palette.primary.main}`,
      color: props.palette.text.primary,
      '&:hover': {
        color: props.palette.primary.main
      },
      '&:not(:first-child):not(:last-child)': {
        borderRadius: 0,
        borderTopWidth: 0
      },
      '&:first-child': {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      '&:last-child': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0
      }
    }
  }),
});

const Profile = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
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
    <List className={classes.list}>
      <ListItem>
        <ListItemText
          primary="Username: "
        />
        <ListItemText
          primary={auth.user.username}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Code: "
        />
        <ListItemText
          primary={auth.user.code}
        />
      </ListItem>
      <ListItem>
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
            Apply
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default Profile
