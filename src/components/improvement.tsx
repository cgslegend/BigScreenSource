import React, {useEffect, useState} from "react";

export const Improvement = () => {
        const [count, setCount] = useState(45273);
        const [count1,setCount1] = useState(367824)
        useEffect(() => {
            const id = setInterval(() => {
                setCount(c => c + 11);
                setCount1(c => c+ 11)
            }, 50);
            return () => clearInterval(id);
        }, []);

    return(
        <div className='improvement'>
            <span className='bordered'><h2>地方公安站点</h2>2,876</span>
            <span className='bordered'><h2>违法案件总数</h2>{count}</span>
            <span className='bordered'><h2>违法人员总数</h2>{count1} </span>
        </div>
    )
}

