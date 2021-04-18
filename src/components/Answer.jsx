import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { color } from '@material-ui/system';

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      borderColor: '#FFB549',
      borderWidth: '3px',
      fontSize: '20px',
      lineHeight: '1',
      color: '#333',
      fontWeight: 600,
      marginBottom: '20px',
      padding: '24px 60px',
      letterSpacing: '6px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      marginTop: '30px',
      "&:hover": {
        backgroundColor: '#FFB549',
        color: '#FFF'
      }
      }
  })
));

const Answer = (props) => {
  const classes = useStyles();
  // const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )
}

export default Answer
