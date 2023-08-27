import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import classes from '../style/DialogWindow.module.css';

export default function DialogWindow() {
    const location = useLocation();
    const data = location.state;

    const { 
        register, 
        handleSubmit
    } = useForm();

    const onSubmit = async (values) => {
        console.log('submit');
    }

    return(
        <div className={classes.dialog_window}>
            {data !== null ? (<div className={classes.title_label}><label> Диалог c {data.name} </label></div>
                ) : (<div/>)}
            <div className={classes.dialog_content}>
                <div className={classes.messages}>
                    
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <input {...register('message')} placeholder='Напишите сообщение...' />
                    <div className={classes.form_btn}><button type="submit"></button></div>
                </form>
            </div>
        </div>
        
    ) 
}