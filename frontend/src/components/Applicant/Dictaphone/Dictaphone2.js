import React, { useState, useEffect, useContext } from 'react'
import { useSpeechRecognition } from '../SpeechRecognition'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {spokenContext2} from '../ProposalForm';
import Button from '@material-ui/core/Button';

const Dictaphone2 = ({ }) => {
  const { setLastSpokenText } = useContext(spokenContext2)

  const [transcribing2, setTranscribing2] = useState(true)
  const [clearTranscriptOnListen2, setClearTranscriptOnListen2] = useState(true)
  const toggleTranscribing = () => setTranscribing2(!transcribing2)
  const toggleClearTranscriptOnListen = () => setClearTranscriptOnListen2(!clearTranscriptOnListen2)
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening2,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ transcribing2, clearTranscriptOnListen2,  })
  useEffect(() => {
    if (interimTranscript !== '') {
      console.log('Got interim result:', interimTranscript)
    }
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript)
    }
    // setValue(finalTranscript)
    setLastSpokenText(finalTranscript)
  }, [interimTranscript, finalTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>No browser support</span>
  }

  return (
    <div style={{display:"flex", flexDirection: "row", height: "auto"}}>
      {/* <span>transcribing: {transcribing ? 'on' : 'off'}</span> */}
      {/* <span>clearTranscriptOnListen: {clearTranscriptOnListen ? 'on' : 'off'}</span> */}
      {!listening2 && <Button variant="outlined" onClick={resetTranscript}>Reset</Button>}
      {listening2 && <Button disabled>Listening...</Button>}
      {/* <button onClick={toggleTranscribing}>Toggle transcribing</button> */}
      {/* <button onClick={toggleClearTranscriptOnListen}>Toggle clearTranscriptOnListen</button> */}
      {/* <span>{transcript}</span> */}
      {listening2 && <span>{transcript}</span>}
    </div>
  )
}

export default Dictaphone2