import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "800px",
    margin: "auto",
    color : "white",
    backgroundColor : "#073642"
  },
  tap : {
      color : "white"
  } 
});

export default function CenteredTabs({setFavoriteTap}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
    setFavoriteTap(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="ALL" className = {classes.tap } />
        <Tab label="Favorits" className = {classes.tap } />
      </Tabs>
    </Paper>
  );
}
