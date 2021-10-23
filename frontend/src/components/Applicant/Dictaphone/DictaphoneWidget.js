import React, { useEffect, useState } from 'react'
import Dictaphone from './Dictaphone'

const DictaphoneWidget = () => {
  const [message, setMessage] = useState('')

  // useEffect(()=>{
  //   console.log(message)
  // },[message])

  const commands = [
    {
      command: '* is my name',
      callback: (name) => setMessage(`Hi ${name}!`),
      matchInterim: true
    },
    {
      command: 'My top sports are * and *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    },
    {
      command: 'Goodbye',
      callback: () => setMessage('So long!'),
      matchInterim: true
    },
    {
      command: 'Pass the salt (please)',
      callback: () => setMessage('My pleasure')
    }
  ]

  return (
    <div>
      {/* <h3>Speak In</h3> */}
      {/* <p>{message}</p> */}
      <Dictaphone commands={commands} />
    </div>
  )
}

export default DictaphoneWidget;