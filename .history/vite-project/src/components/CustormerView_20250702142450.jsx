export default function CustomerView({custormer}){
    return <div>
        <h3>View customer </h3>
        
            <ul style={{listStyle:'none'}}>
                {custormer.map((e,i)=>                return{
                     <li key={i}>
                        {e}

                </li>}
                )}
               
            </ul>
      
    </div>
}