export default function CustomerView({customer}){
    return <div>
        <h3>View customer </h3>
        
            <ul style={{listStyle:'none'}}>
                {custormer.map((e)=>{
                     <li>
                        {e}

                </li>
                })}
               
            </ul>
      
    </div>
}