import React from "react";
import DialogItem from "./DialogItem/Item";

import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  console.log(props)

  let dialogElement = props.messagesPage.dialogs.map((el) =>  <DialogItem id={el.id} name={el.name} /> )


  
  let messagElement = props.messagesPage.messages.map((el) => <Message message={el.message} />)
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
     { dialogElement}
      </div>
      <div className={s.messages}>
      {messagElement}
      </div>
    </div>
  );
};
export default Dialogs;
