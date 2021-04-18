import React from 'react'
import { makeStyles,createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from "./index";

const useStyles = makeStyles(() => (
  createStyles({
    "chats": {
      height: '530px',
      padding: '0',
      overflow: 'auto',
      marginTop: '20px',
      background: 'rgba(107, 184, 255, 0.1)',
      borderRadius: '8px',
    }
  })
))



const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index)=>{
       return <Chat text={chat.text} type={chat.type}
        key={index.toString()}></Chat>
      })}
      </List>
  )
}

export default Chats
