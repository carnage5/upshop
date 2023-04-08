import { useState,useEffect } from "react";
import Item from "./cartitem";

function Cart() {
  const [items,setitems]=useState([])
  
  useEffect(() => {
    const getitems=async()=>{
      const res= await fetch("http://localhost:5003/getcart/"+localStorage.user)
      const json=await res.json()
      setitems([...json])
      console.log(items)
     }

    getitems()
    console.log(items)
  }, []);
    return (<div>
        <h1>Cart</h1>

<section class="text-gray-600 body-font w-full">
  <div class="container px-5 py-2 mx-auto w-full">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="text-2xl font-medium title-font text-gray-900 tracking-widest">YOUR CART</h1>
    </div>
    <div class="grid grid-flow-row gap-4  items-center ">
      {items.map((n)=>(
          <Item key={n.product} id={n.product} quan={n.quantity}/>
      ))}
    </div>
    <div className="flex flex-wrap items-center justify-around mt-4 bg-slate-200 p-4 rounded-lg">
      <h1 className="text-black font-semibold text-2xl">Cart total - Rs 100</h1>
      <button className="bg-blue-500 p-2 text-xl rounded-lg text-white">Checkout</button>
    </div>
  </div>
</section>
    </div>  );
}

export default Cart;