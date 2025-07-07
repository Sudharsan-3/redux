import { useSelector } from "react-redux"

export default function CustomerView(){
   const customer =  useSelector((state)=>state.custormers)
   console.log(customer,"from customer view")
   function deleteHandel(){

   }
    return <div>
        <h3>View customer </h3>
        
            <ul style={{listStyle:'none'}}>
                {customer.map((e,i)=>
                     <li key={i}>
                        {e}
                        <button onClick={()=>}>Delete</button>

                </li>
                )}
               
            </ul>
      
    </div>
}