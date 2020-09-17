import React from 'react'

function EntryList(props) {
    const input = props.input;
    const EntryList = input.map(item => {
        return <div className="entrylist">
            <p>{item.text}</p> 
            <p>{item.key}</p>
            <hr />
            
        </div>
    })




    return (
    
         
        <div>
            <div>{EntryList}</div>
        </div>
    
    )
}

export default EntryList

