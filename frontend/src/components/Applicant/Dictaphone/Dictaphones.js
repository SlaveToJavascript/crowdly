import React, { useState } from 'react'
import SpeechRecognition from '../SpeechRecognition'
import { useSpeechRecognition } from '../SpeechRecognition'
import Button from '@material-ui/core/Button';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import Dictaphone from './Dictaphone';

const Dictaphones = () => {
  const [transcribing, setTranscribing] = useState(true)
  const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })
  const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ transcribing, clearTranscriptOnListen,  })

  return (
    <>
    <div style={{display: 'flex'}}>
      <Button variant="outlined" onClick={listenContinuously}>
        {/* Speak into Field */}
        <SettingsVoiceIcon />
      </Button>
      {/* <button onClick={listenContinuously}>Listen (English)</button> */}
      {/* <button onClick={listenContinuouslyInChinese}>Listen (Chinese)</button> */}
      {listening && <Button variant="outlined" onClick={SpeechRecognition.stopListening}>Stop</Button>}
      {listening && <Button disabled>Listening...</Button>}
    </div>
    <Dictaphone />
    <br />
    {listening && <span>{interimTranscript}</span>}
    </>
  )
}

export default Dictaphones;