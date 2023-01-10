import React from 'react'
import { useState } from 'react'
function Cherche() {
    const [fruit,setFruit]=useState(

    )
   
  return (
    <div >
        <h1>Composant cherchBar</h1>
         <p>Entrer le mot a chercher</p>
         <input type="text"  />
         <button onClick>Chercher</button>

    </div>
  )
}

export default Cherche