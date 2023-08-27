import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { logout, isAuth } from '../redux/slice/AuthSlice'
import classes from '../style/Header.module.css'


const Header = () =>{

    const dispatch = useDispatch();
    const isUserAuth = useSelector(isAuth)

    const doLogout = () => {
        dispatch(logout());
        window.localStorage.removeItem('token');
    }

    return(
        <div className={classes.header}>
            Мессенджер для ИТ-команд
            {isUserAuth ? (
                <div><button onClick={doLogout}>Logout</button></div>
            ) : (<div/>)}
        </div>
    )
}

export default Header;