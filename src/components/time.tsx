import {useEffect, useState} from "react";
import moment from 'moment';
import React from "react";

export const Time = () => {
    const  [now,setNow] = useState(moment.now())
    useEffect(()=>{
        const t = setInterval(()=>{
            setNow(moment.now())
        },1000)
        return () =>{
            clearTimeout(t)
        }
    },[])

    return(
        <div className='date'> {moment().format("YYYY-MM-DD | HH:mm:ss")}</div>
    )
}