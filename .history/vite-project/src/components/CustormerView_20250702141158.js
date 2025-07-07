export default function CustomerView(){
    return <div>
        <h3>View customer </h3>
        
            <ul style={{listStyle:''}}>
                {CustomerView.map((e)=>{
                     <li>
                        {e}

                </li>
                })}
               
            </ul>
      
    </div>
}