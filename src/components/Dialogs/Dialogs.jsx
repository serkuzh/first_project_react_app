import React from "react";
import DialogItem from "./DialogItem/Item";

import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElement = props.messagesPage.dialogs.map((el) => (
    <DialogItem id={el.id} name={el.name} />
  ));

  let messagElement = props.messagesPage.messages.map((el) => (
    <Message message={el.message} />
  ));
  let newMessage = React.createRef();
  let addMessage = () => {
debugger
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogElement}</div>
        <div className={s.messages}>
          <div>{messagElement}</div>
          <div className={s.text_but}>
            <div>
              <textarea ref={newMessage}></textarea>
            </div>
            <div>
              <button onClick={addMessage}>Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
