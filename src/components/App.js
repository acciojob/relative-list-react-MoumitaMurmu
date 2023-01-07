import React from 'react'

const App = () => {
    const arr=["A","B","C"]
  return (
    <div>
        <ol id='relativeList'>
        {arr.map((el,i)=>
            <li id={`relativeListItem${i+1}`} key={`relativeListItem${i+1}`}>{el}</li>
        )}
        </ol>
    </div>
  )
}

export default App
