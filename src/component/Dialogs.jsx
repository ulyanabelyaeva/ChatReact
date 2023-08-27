import DialogItem from "./DialogItem";
import { fetchTeam } from '../redux/slice/UserSlice'
import classes from '../style/Dialogs.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Dialogs() {

    const dispatch = useDispatch();

    //в state.users - users это название слайса
    const { users } = useSelector(state => state.users)
    const isLoading = users.status === 'loading';
    console.log(users)
    useEffect(() => {
        dispatch(fetchTeam());
    }, [])

    return(
        <div className={classes.items}>
            <div>
                {
                (isLoading ? users.items : [new Array(5)]).map(
                    (object) => isLoading ? (<DialogItem loading={isLoading} user={object}/>) : <DialogItem loading={isLoading}/>)
                }
            </div>
        </div>
    )
}