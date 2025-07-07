import { useDispatch, useSelector } from "react-redux"
import { deletCustomer } from "../slice/coustomerSclie"

export default function CustomerView(){
   const customer =  useSelector((state)=>state.custormers)
   const dispatch = useDispatch()
   console.log(customer,"from customer view")
   function deleteHandel(i){
    console.log(i)
    dispatch(deletCustomer(i))
    

   }
    return <div>
        <h3>View customer </h3>
        
            <ul style={{listStyle:'none'}}>
                {customer.map((e,i)=>
                     <li key={i}>
                        {e}
                        <button onClick={()=> deleteHandel(i)}>Delete</button>

                </li>
                )}
               
            </ul>
      
    </div>
}