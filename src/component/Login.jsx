import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { fetchLogin, isAuth } from '../redux/slice/AuthSlice'
import Header from './Header'

import classes from '../style/Login.module.css'

const Login = () =>{
    
    const dispatch = useDispatch();
    const isUserAuth = useSelector(isAuth)

    const { 
        register, 
        handleSubmit
    } = useForm();

    const onSubmit = async (values) => {
        let user = {
            login: values.login,
            password: values.password
        };
        const data = await dispatch(fetchLogin(user));
        if ('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        }
        console.log(isUserAuth);
    }

    if (isUserAuth){
        return <Navigate to="/chat"/>
    }

    return(
        <div className={classes.login_container}>
            <Header/>
            <div className={classes.main}>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <div className={classes.title}>Войти</div>
                    <input {...register('login', {required: 'Укажите логин'})} placeholder='Логин' />
                    <input {...register('password', {required: 'Укажите пароль'})} placeholder='Пароль'/>
                    <div className={classes.form_btn}>
                        <button className={classes.btn} type="submit">Войти</button>
                    </div>
                    <div className={classes.login_link}><a href='/registration/team'>Создать команду</a></div>
                </form>
            </div>
        </div>
    )
}

export default Login;