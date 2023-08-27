import Dialogs from "./Dialogs";
import DialogWindow from "./DialogWindow";
import RegistrationParticipantModal from "./RegistrationParticipantModal";
import { fetchMe } from '../redux/slice/AuthSlice'

import classes from '../style/Chat.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from "react";



export default function Chat() {

  const [modalActive, setModalActive] = useState(false);

  
  const dispatch = useDispatch();
  //получение объекта из state
  const currectUser = useSelector(state => state.auth.user)
  console.log(currectUser)
  useEffect(() => {
    dispatch(fetchMe());
  }, [])

  return (
    <div className={classes.chat}>

      <div className={classes.chat_dialogs && classes.chat_items_general}>

        <div className={classes.currectAuthUser}>
          <div>{currectUser.name}</div>
          <div>@{currectUser.login}</div>
        </div>

        <div className={classes.menu}>
          <button onClick={() => setModalActive(true)}>Добавить участника</button>
        </div>

        <Dialogs/>
      </div>
      <RegistrationParticipantModal active={modalActive} setActive={setModalActive}/>

      <div className={classes.chat_window}>
        <DialogWindow/>
      </div>
    </div>
  );
}