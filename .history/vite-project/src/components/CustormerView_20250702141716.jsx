export default function CustomerView({CustomerView}){
    return <div>
        <h3>View customer </h3>
        
            <ul style={{listStyle:'none'}}>
                {CustomerView.map((e)=>{
                     <li>
                        {e}

                </li>
                })}
               
            </ul>
      
    </div>
}