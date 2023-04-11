import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow,formatDistance,subDays, formatRelative } from 'date-fns'
import Item from "./cartitem";

function Order() {
    const param = useParams()
    const [ord,setord]=useState([])
    useEffect(() => {
        const gethistory = async()=>{
            const res=await fetch("http://localhost:5003/history/"+param.user)
            const json = await res.json()
            setord([...json].reverse())

        }
        
        gethistory()
        console.log(ord)
    }, []);
    return ( <div>
        <h1>order</h1>
        {ord.map((n)=>(
            <>
            <h1>{formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}</h1>
            <h1>{formatRelative(new Date(n.createdAt), new Date(), { addSuffix: true })}</h1>
            <div>{ n.products.map((t)=>(
                <h1>{t.product}</h1>
            ))}</div>
            <h1>total - {n.total}</h1>
            </>
        ))}
    </div> );
}

export default Order;