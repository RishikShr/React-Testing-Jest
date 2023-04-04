import React from 'react'

const CommetList = ({allcomments}) => {
    if(allcomments.length== 0){
        return <h2>comments are not available</h2>
    }  
   
    return (
      <div>
        <ul>
            {
             allcomments.map(item=>{
                return <li key={item.id}>{item.text}</li>
             })
            }
        </ul>
        
      </div>
    )
}

export default CommetList