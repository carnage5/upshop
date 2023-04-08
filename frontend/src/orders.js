import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Order() {
    const param = useParams()
    useEffect(() => {
        const gethistory = async()=>{
            const res=await fetch("http://localhost:5003/history/"+param.user)
            const json = await res.json()
            console.log(json)
            
        }
        gethistory()
    }, []);
    return ( <div>
        <h1>order</h1>
    </div> );
}

export default Order;