import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "amazon",
      description: "lorem bhai 12nkehfhf jhgfgkizd jbdgf",
      instock : true
    },
    {
      image:
        "https://images.unsplash.com/photo-1669827014193-be4fad074832?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Swiggy",
      description: "lorem bhen badg bgbd hjb",
      instock : false
    },
    {
      image:
        "https://images.unsplash.com/photo-1653389527532-884074ac1c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8em9tYXRvfGVufDB8fDB8fHww",
      name: "zomato",
      description: "lorem auccle ji kdsb ksjdbhf kb",
      instock :false
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
     {data.map((elm ,index)=>(
       <div className="w-52 bg-zinc-100 rounded-md  overflow-hidden">
       <div className="w-full h-32 bg-zinc-300">
         <img className="object-center h-full w-full" src={elm.image} alt="" />
       </div>
       <div className="w-full px-3 py-4">
         <h2 className="font-semibold">{elm.name}</h2>
         <p className="text-xs mt-5">
       {elm.description}
         </p>
         <button className={`  px-4 py-1 ${elm.instock ?  'bg-blue-600' :'bg-red-600'} text-xs rounded text-zinc-100 mt-3 `}>{elm.instock ? "In-stock" : "Out-of-Stock" }
          
         </button>
       </div>
     </div>
     )) }
    </div>
  );
};

export default Card;
