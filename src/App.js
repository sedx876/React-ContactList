import React, { useState } from 'react';
import './styles/App.css';
import { Numbers } from './components/Numbers'
import { Filter } from './components/Filter'


export const App = () => {

  const [word, setWord] = useState('')
  const [persons] = useState([
    {name: 'Sharon Watkins', number: '570-637-8765'},
    {name: 'Mike Watkins', number: '570-637-3043'},
    {name: 'Kendra Watkins', number: '570-637-2121'},
    {name: 'Sam Watkins', number: '570-637-1212'},
  ]);
  const [filterDisplay, setFilterDisplay] = useState([])

  const handleChange = e => {
      setWord(e)
      let oldList = persons.map(person => {
        return { name: person.name.toLowerCase(), number: person.number}
      })
  
      if (word !== '') {
        let newList = []
        
        newList = oldList.filter(person => 
          person.name.includes(word.toLowerCase())
          )
          setFilterDisplay(newList)
      } else {
        setFilterDisplay(persons)
      }
    }

    return (
      <div>
        <Filter value={word} handleChange={e => handleChange(e.target.value)}/>
        <Numbers persons={word.length < 1 ? persons : filterDisplay}/>
      </div>
    )

}

export default App;
