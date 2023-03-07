import { useState } from 'react'

import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light') //weather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#252520'
      showAlert('Dark mode has been enabled !', 'success')
      document.title = 'TextUtils -Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled !', 'success')
      document.title = 'TextUtils -Light Mode'
    }
  }
  const theme = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#252'
      showAlert('Selected Theme has been enabled !', 'success')
      document.title = 'TextUtils -Selected Theme Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled !', 'success')
      document.title = 'TextUtils -Light Mode'
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  return (
    <>
      
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          theme={theme}
        />
        <Alert alert={alert} />

       
          
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to ananyze below"
                mode={mode}
              />
        
        


    </>
  )
}

export default App
