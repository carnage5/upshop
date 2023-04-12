import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./cartitem";
import Singleorder from "./orderitem";

function Order() {
    const param = useParams()
    const [ord, setord] = useState([])
    useEffect(() => {
        const gethistory = async () => {
            const res = await fetch("http://localhost:5003/history/" + param.user)
            const json = await res.json()
            setord([...json].reverse())
        }
        gethistory()
    }, []);
    return (<div>
        <h1>order</h1>
        <div class="flex flex-col text-center w-full mb-5">
            <h1 class="text-2xl font-medium title-font text-gray-900 tracking-widest">YOUR ORDERS</h1>
        </div>
        {ord.map((n) => (
                <Singleorder key={n._id} data={n}/>
        ))}
    </div>);
}

export default Order;