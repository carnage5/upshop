import { useEffect, useState } from "react";

function Item(props) {
  const [prod,setprod]=useState({})
  useEffect(() => {
    const getprod=async ()=>{
      const res=await fetch("http://localhost:5002/getproduct/"+props.id)
      const json = await res.json()
      setprod(json)
      console.log(prod)
    }
    getprod()
  }, []);
  
    return ( 
        <div className="flex items-center justify-center">
        <div class="p-4 w-[75%] rounded-lg shadow-xl hover:scale-[1.1] hover:transf">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left w-full">
          <img alt="team" class="flex-shrink-0 rounded-lg h-24 aspect-[1] object-cover object-center sm:mb-0 mb-4" src={prod.imgsrc}/>
          <div class="w-full sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">{prod.name}</h2>
            <h3 class="text-black font-medium text-md mb-3">Rs {prod.price}  &nbsp;   x{props.quan}</h3>
            {/* <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporwareDIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporwareDIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporwareDIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
           
          </div>
        </div>
      </div>
      </div>
     );
}

export default Item;