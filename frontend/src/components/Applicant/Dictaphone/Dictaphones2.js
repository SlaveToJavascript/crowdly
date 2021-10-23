import React, { useState } from 'react'
import SpeechRecognition from '../SpeechRecognition'
import Button from '@material-ui/core/Button';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import Dictaphone2 from './Dictaphone2';

const Dictaphones2 = () => {
  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })
  const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  return (
    <>
    <div style={{display: 'flex'}}>
      <Button variant="outlined" onClick={listenOnce}>
        {/* Speak into Field */}
        <SettingsVoiceIcon />
      </Button>
      {/* <button onClick={listenContinuously}>Listen (English)</button> */}
      {/* <button onClick={listenContinuouslyInChinese}>Listen (Chinese)</button> */}
      {/* <Button variant="outlined" onClick={SpeechRecognition.stopListening}>Stop</Button> */}
    </div>
    <Dictaphone2 />
    </>
  )
}

export default Dictaphones2;