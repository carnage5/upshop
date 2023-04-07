import { useState } from "react";
import { Link } from "react-router-dom";

function Display(props) {
    return ( <div>
            
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 ">
    <div className= "flex justify-center rounded-3xl ">
        <img class="p-8 rounded-t-lg aspect-[3/2] object-center object-contain h-60 " src={props.imgsrc} />
    </div>
    <div class="px-5 pb-5">
            <p class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">{props.name.length > 45 ? props.name.slice(0,45)+". . .": props.name }</p>
        <div class="flex items-center justify-between">
            <span class="text-xl font-semibold text-gray-900 dark:text-white">Rs {props.price}</span>
            <Link to="/details" state={{details:props}} class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Check it out</Link>
        </div>
    </div>
</div>

    </div> );
}

export default Display;