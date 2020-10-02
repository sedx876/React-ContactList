import React, { useState } from 'react';
import './styles/App.css';
import { Numbers } from './components/Numbers'


export const App = () => {

  const [persons] = useState([
    {name: "Sharon", number: "570-637-8765"},
    {name: "Mike", number: "570-637-3043"},
    {name: "Kendra", number: "570-637-2121"}
  ])

return (
  <div>
    <Numbers persons={persons} />
  </div>
)

}

export default App;
