import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchRegistrationParticipant } from '../redux/slice/UserSlice'
import { fetchTeam } from '../redux/slice/UserSlice'

import '../style/RegistrationModal.css'

const RegistrationParticipantModal = ({active, setActive}) =>{
    
    const dispatch = useDispatch();

    const { 
        register, 
        handleSubmit
    } = useForm();

    const onSubmit = async (values) => {
        let user = {
            name: values.name,
            login: values.login,
            password: values.password,
            team: values.team
        };
        await dispatch(fetchRegistrationParticipant(user));
        setActive(false)
        dispatch(fetchTeam())
    }

    return(
        <div className={active ? "modal && active" : "modal"} onClick={() => setActive(false)}>
            <form onSubmit={handleSubmit(onSubmit)} onClick={e => e.stopPropagation()} className="form" id='form'>
                <div className="title">Регистрация участника</div>
                <input {...register('name', {required: 'Укажите имя'})}  placeholder='Имя' name='name' />
                <input {...register('login', {required: 'Укажите логин'})} placeholder='Логин' name='login' />
                <input {...register('password', {required: 'Укажите пароль'})} placeholder='Пароль' name='password'/>
                <input {...register('team', {required: 'Укажите команду'})} placeholder='Команда' name='team'/>
                <div className="form_btn">
                    <button className="btn" type="submit">Зарегистрировать</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationParticipantModal;