import React from 'react'
import './App.css'
import AddRow from '../AddRow/AddRow'

export default function App() {
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

  return (
    <div className="app">
      <h1>FIRST LAST BEST WORST</h1>
      <div className="explainer">
        <span>Anectdote</span>
        <span>Story</span>
      </div>
      <div className="row-wrapper">
        <AddRow />
      </div>
    </div>
  )
}
