import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"

import { fetchRegistrationTeam } from '../redux/slice/UserSlice'
import Header from './Header'

import classes from '../style/Login.module.css'

const RegistrationTeam = () =>{
    
    const dispatch = useDispatch();

    const { 
        register, 
        handleSubmit
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (values) => {
        let team = {
            name: values.name,
            login: values.login,
            password: values.password,
            team: values.team
        };
        await dispatch(fetchRegistrationTeam(team));
            
        navigate("/login");
    }

    return(
        <div className={classes.login_container}>
        <Header/>
        <div className={classes.main}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form} id='form'>
                <div className={classes.title}>Создание команды</div>
                <input {...register('name', {required: 'Укажите имя'})}  placeholder='Имя владельца' name='name' />
                <input {...register('login', {required: 'Укажите логин'})} placeholder='Логин владельца' name='login' />
                <input {...register('password', {required: 'Укажите пароль'})} placeholder='Пароль владельца' name='password'/>
                <input {...register('team', {required: 'Укажите команду'})} placeholder='Команда' name='team'/>
                <div className={classes.form_btn}>
                    <button className={classes.btn} type="submit">Зарегистрировать</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default RegistrationTeam;