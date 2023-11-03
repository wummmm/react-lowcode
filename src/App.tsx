import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Method = 'GET' | 'POST'

function App() {

  const clickParent = (e) => {
    console.log('zzzzz')
  }

  const clickDemo = (e) => {
    console.log(123213)
  }

  return (
    <>
      <div>
        222
        <div onClickCapture={clickParent}>
          <p onClick={clickDemo}>333</p>
        </div>
      </div>
    </>
  )
}

export default App
