import React, { useState } from 'react'

export const Numbers = props => {

  const [word, setWord] = useState('')

  const [filterDisplay, setFilterDisplay] = useState(props.persons)

  const handleChange = e => {
    let oldList = props.persons.map(person => {
      return { name: person.name.toLowerCase(), number: person.number}
    })

    if (e !== '') {
      let newList = []
      setWord(e)
      newList = oldList.filter(person => 
        person.name.includes(word.toLowerCase())
        )
        setFilterDisplay(newList)
    } else {
      setFilterDisplay(props.persons)
    }
  }

  return (
    <div>
      <h1>Numbers</h1>
      filter: <input onChange={e => handleChange(e.target.value)}/>
      {filterDisplay.map((person, i) => (
        <div key={i}>
        <li>
          {person.name} &nbsp;
          <span>{person.number}</span>
        </li>
        </div>
      ))}
    </div>
  )

}