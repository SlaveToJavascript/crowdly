import React, { useState, useEffect, useContext } from 'react'
import { useSpeechRecognition } from '../SpeechRecognition'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {spokenContext} from '../ProposalForm';
import Button from '@material-ui/core/Button';

const Dictaphone = ({ }) => {
  const { setLastSpokenText } = useContext(spokenContext)

  const [transcribing, setTranscribing] = useState(true)
  const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
  const toggleTranscribing = () => setTranscribing(!transcribing)
  const toggleClearTranscriptOnListen = () => setClearTranscriptOnListen(!clearTranscriptOnListen)
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ transcribing, clearTranscriptOnListen,  })
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
      {!listening && <Button variant="outlined" onClick={resetTranscript}>Reset</Button>}
      {/* {listening && <Button disabled>Listening...</Button>} */}
      {/* <button onClick={toggleTranscribing}>Toggle transcribing</button> */}
      {/* <button onClick={toggleClearTranscriptOnListen}>Toggle clearTranscriptOnListen</button> */}
      {/* <span>{transcript}</span> */}
      {/* {listening && <span>{interimTranscript}</span>} */}
    </div>
  )
}

export default Dictaphone