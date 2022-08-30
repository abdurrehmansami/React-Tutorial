import React, { useState } from 'react'

const IncrementDecrement = () => {

  const [chngNum, setchngNum] = useState(0)

  const addNum = () => {
    setchngNum(chngNum + 1)
  }

  const subNum = () => {
    if (chngNum !== 0) {
      setchngNum(chngNum - 1)
    }
    else
      alert(`Decrement Limit ${chngNum} reached`)
  }


  return (
    <div style={{marginTop:"10px"}}>
      <h2>{chngNum}</h2>
      <button onClick={addNum}>Add</button>
      <button onClick={subNum}>Subtract</button>
    </div>
  )
}

export default IncrementDecrement;