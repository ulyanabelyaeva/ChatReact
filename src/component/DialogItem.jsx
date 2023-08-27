import { Link } from "react-router-dom";
import classes from '../style/DialogItem.module.css';

export default function DialogItem(props) {
    const path = '/chat/'
    const user = props.user

    if (props.loading) {
        return(
            <div className={classes.item}>
                <Link className={classes.link} to={path} state={user}>{user.name}</Link>
                <div className={classes.login}>@{user.login}</div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}