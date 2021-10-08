import React from "react";
import * as sessionActions from '../../store/session';
import { useDispatch} from 'react-redux';
import './DemoButton.css';


export default function DemoLogin() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();
    const email = 'SpongePants@email.com'
    const password = 'Garry1!'
    return dispatch(sessionActions.login({ email, password }))
  };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <button className="demo-button">Demo User</button>
            </form>
            
        </>
    )
}