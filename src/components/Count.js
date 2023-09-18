import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// export default function ToggleVisibility ({ children}) {
import images from './images';
function Count(props) {
   const [counters, setCounter] = useState(0);
   
   const handleReset = () => {
      setCounter(0);
   };
   
   return (
      <div className='counterLayout'>
      <div className={`'buttons' 'border' text-${props.mode ==='light'?'dark':'light'}`}>
         
         <button onClick={() => setCounter(counters + 1)}>Increment</button>
         <button onClick={() => setCounter(counters - 1)}>Decrement</button>
         <button onClick={handleReset}>Reset</button>
         
         <p>Count: {counters}</p>
         </div>
       <Link to="/home"> <img src={ images.flipkart } alt="img" />
       </Link>
       <img src={ images.m } alt="img" />
       <img src={ images.sea } alt="img" />
       <img src={ images.nature } alt="img" />
        <img src={ images.flipkart } alt="img" />      
      </div>
   );
}
// }
export default Count;