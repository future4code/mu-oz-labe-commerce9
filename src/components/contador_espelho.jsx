import React, {useState} from 'react'

import Counter from "./components/Counter";
import Mirror from "./components/Mirror"

function contadorEspelho() {
  const [count, setCount] = useState(0);

  return (

    <div >
      <Counter count={count} setCount={setCount}/>

      <hr />

      <Mirror count={count} />
     
    </div>
  );
}

export default App;