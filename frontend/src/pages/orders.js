import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Singleorder from "./orderitem";

function Order() {
    const param = useParams()
    const [ord, setord] = useState([])
    useEffect(() => {
        console.log(param.user)
        const gethistory = async () => {
            const res = await fetch("http://localhost:5003/history/" + param.user)
            const json = await res.json()
            if(res.ok)
                setord([...json].reverse())
            else 
                console.log(json)
        }
        gethistory()
    }, []);
    return (<div>
        <div className="flex flex-col text-center w-full mb-5">
            <h1 className="text-2xl font-medium title-font text-gray-900 tracking-widest">YOUR ORDERS</h1>
        </div>
        {ord.length>0 ? ord.map((n) => (
                <Singleorder key={n._id} data={n}/>
        )): <p>No previous orders</p>}
    </div>);
}

export default Order;