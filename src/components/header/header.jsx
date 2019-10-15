import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeId} from "../Redux/headerReducer";



const Header = (props) => {
    
const choiceOfStore = (e)=>{
    props.changeId(e.currentTarget.value)
}
    return (
        <div className={s.header}>

            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
           
            <select onChange={choiceOfStore}>
                <option value='1' selected >Wildberries</option>
                <option value='2' >Onliner</option>
                <option value='3' >Aliexpress</option>
            </select>
        </div>

    );
}


export default connect(null,{changeId}) (Header)