import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'

let promptList
if (!localStorage.getItem('promptList')) {
  fetchPrompts()
} else {
  promptList = JSON.parse(localStorage.getItem('promptList'))
  console.log('Prompts exists')
}

function fetchPrompts() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var requestOptions = {
    method: 'get',
    headers: myHeaders,
    redirect: 'follow',
  }

  fetch(
    'https://v1.nocodeapi.com/birkeholm/google_sheets/mWHzKYlvpVLIxhGo?tabId=Ark1',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem('promptList', JSON.stringify(result.data))
      promptList = JSON.parse(localStorage.getItem('promptList'))
    })
    .catch((error) => console.log('error', error))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
